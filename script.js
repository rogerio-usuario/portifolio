window.addEventListener("DOMContentLoaded", () => {
  // Contar os cards de projeto
  const projetos = document.querySelectorAll("#projetos .cards-container .card").length;
  const abaProjetos = document.getElementById("aba-projetos");
  if (abaProjetos) {
    abaProjetos.textContent = `Projetos (${projetos})`;
  }

  // Contar os cards de certificado
  const certificados = document.querySelectorAll("#certificados .cards-container .card").length;
  const abaCertificados = document.getElementById("aba-certificados");
  if (abaCertificados) {
    abaCertificados.textContent = `Certificados (${certificados})`;
  }

  // Carrossel
  const slides = document.querySelector('#slider .slides');
  if (slides) {
    const total = slides.children.length;
    let index = 0;

    setInterval(() => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * (100 / total)}%)`;
}, 1000); // agora troca a cada 1.5 segundos

  }
});



function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }

  // Validação simples de email
  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}

function abrirModalEmail() {
  document.getElementById("modal-email").style.display = "flex";
}

function fecharModalEmail() {
  document.getElementById("modal-email").style.display = "none";
}

function enviarEmail() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido.");
    return false;
  }

  // Monta o link mailto
  const assunto = encodeURIComponent("Mensagem de " + nome);
  const corpo = encodeURIComponent(mensagem + "\n\nContato: " + email);
  window.location.href = `mailto:rogerioignacio85@gmail.com?subject=${assunto}&body=${corpo}`;

  return false; // evita envio real do formulário
}



// TELA PROJETO

function abrirModal(id) {
  const modal = document.getElementById("modal");
  const conteudo = document.getElementById("modal-conteudo");
  const fundo = document.getElementById("conteudo-site");

  const projeto = projetos[id];

  if (!projeto) return; // evita travamento se o ID não existir

  conteudo.innerHTML = `
    <button class="btn-fechar" onclick="fecharModal()" aria-label="Fechar projeto">×</button>
    <div class="galeria-modal">
      <img src="${projeto.imagem}" alt="${projeto.alt}">
    </div>
    <h2>${projeto.titulo}</h2>
    ${projeto.descricao}
  `;

  modal.style.display = "flex";
  fundo.classList.add("embaçado");
}
const projetos = {
  projeto1: {
    imagem: "imagens/projeto1.jpg",
    alt: "Drone VITA em ação",
    titulo: "VITA Vida Inteligente Tática Autônoma",
    descricao: `

      <p>VITA é uma plataforma aérea inteligente, silenciosa, interativa e totalmente voltada ao cuidado humano...</p>
      <p class="italico">“VITA: inteligência que protege, tecnologia que reconhece, autonomia que salva.”</p>
      
      <h3>Problema Identificado:</h3>
      
      <p>Falta de tecnologias responsivas em campo dificulta o resgate...</p>
      <strong>Solução Proposta:</strong><br>
      <ul>
        <li>IA embarcada conversacional com voz natural</li>
        <li>Reconhecimento facial e de objetos</li>
        <li>Aplicativo móvel com interface remota</li>
        <li>Energia regenerativa para operação contínua</li>
      </ul>
      <strong>Características Técnicas:</strong><br>
      <ul>
        <li>Câmera HD com visão noturna</li>
        <li>Propulsão silenciosa</li>
        <li>Acionamento automático de socorro</li>
      </ul>
      <strong>Público-Alvo:</strong><br>
      <ul>
        <li>Equipes médicas, bombeiros e defesa civil</li>
        <li>Idosos, crianças, pessoas com deficiência</li>
      </ul>
      <strong>Impacto Esperado:</strong><br>
      <ul>
        <li>Resposta imediata a emergências</li>
        <li>Inclusão digital e suporte assistido</li>
      </ul>
      <strong>Estágio Atual:</strong><br>
      <ul>
        <li>Modelagem funcional (MVP)</li>
        <li>Reconhecimento facial e integração com app</li>
      </ul>
      <p><em>“VITA amplia o significado de cuidado, presença e inteligência artificial humanizada.”</em></p>
    ` 
  },
  projeto2: {
    imagem: "imagens/projeto2.jpg",
    alt: "Músculo Artificial",
    titulo: "Músculo Artificial",
    descricao: `
      Embreve mais informações
   
    `
  },
  projeto3: {
    imagem: "imagens/projeto3.jpg",
    alt: "Cão Robótico",
    titulo: "Cão Robótico",
    descricao: `
     Embreve mais informações
    `
    },
  projeto4: {
    imagem: "imagens/projeto4.jpg",
    alt: "Super patins",
    titulo: "Super patins",
    descricao: `
      Embreve mais informações
    `
    },
  projeto5: {
    imagem: "imagens/projeto5.jpg",
    alt: "Geradorde Ondas resoantes de Som",
    titulo: "Geradorde Ondas resoantes de Som",
    descricao: `
      Embreve mais informações
    `
    },
  projeto6: {
    imagem: "imagens/projeto6.jpg",
    alt: "Exoesqueleto",
    titulo: "Exoesqueleto",
    descricao: `
     Embreve mais informações
    `
    },
  projeto7: {
    imagem: "imagens/projeto7.jpg",
    alt: "Scooter Elétrica com reposiçao de energia",
    titulo: "Scooter Elétrica com reposiçao de energia",
    descricao: `
   Embreve mais informações
    `
    },
  projeto8: {
    imagem: "imagens/projeto8.jpg",
    alt: "Lanterna de Sal",
    titulo: "Lanterna de Sal",
    descricao: `
     Embreve mais informações
    `
  }
};










// TELA CERTIFICADO

const certificados = {
 cert13: {
  titulo: "Assistente de Logística",
  imagem: "imagens/Certificado13.jpg",
  descricao: `
    Concluí o curso de Assistente de Logística pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul 
    (IFRS) em 12 Outubro de 2023, uma formação online de 200 horas que me trouxe uma base sólida 
    e prática sobre o funcionamento da logística moderna. Foi uma experiência muito positiva — 
    cada módulo me ajudou a entender melhor como os bastidores das operações funcionam,
    desde o estoque até a entrega final.<br><br>

    <strong style="color:rgb(5, 5, 5); font-size: 24px;">
      O curso é dividido em 9 módulos:
    </strong><br>

    • <em><strong>Logística geral</strong>:</em> Entendi como a logística é estratégica para qualquer empresa.<br>
    • <em><strong>Gestão de estoques</strong>:</em> Aprendi técnicas para controlar e organizar estoques.<br>
    • <em><strong>Cadeia de suprimentos</strong>:</em> Descobri como fornecedores, produção e distribuição
     precisam estar integrados.<br>
    • <em><strong>Transportes e distribuição</strong>:</em> Aprendi a planejar rotas e escolher modais eficientes.<br>
    • <em><strong>Movimentação e armazenagem</strong>:</em> Entendi a importância do layout e manuseio correto dos produtos.<br>
    • <em><strong>Custos logísticos</strong>:</em> Aprendi a calcular e otimizar os custos operacionais.<br>
    • <em><strong>Logística em serviços</strong>:</em> Vi como a logística se aplica em setores como saúde e educação.<br>
    • <em><strong>Processamento de pedidos e atendimento ao cliente</strong>:</em> Compreendi o fluxo
     de pedidos e a importância da fidelização.<br>
    • <em><strong>Legislação aplicada à logística</strong>:</em> Estudei normas, contratos e regulamentações do setor.<br><br>

    O curso foi realizado na plataforma Moodle do IFRS, de forma 
    totalmente online e gratuita. Mesmo sem tutoria, 
    o conteúdo era claro e bem estruturado. Recebi o certificado 
    após concluir todos os módulos com bom aproveitamento.<br><br>

    Essa jornada ampliou minha visão sobre logística e me preparou para
    atuar com mais segurança e conhecimento na área. Além de agregar 
    ao meu currículo, me mostrou como a organização e o planejamento são 
    fundamentais para qualquer operação funcionar bem.
  `
},

    cert12: {
    titulo: "Gestão de Pessoas",
    imagem: "imagens/Certificado12.jpg",
    descricao:
    `Concluí esse curso de Gestão de Pessoas em 12 Setembro de 2023, pelo Sebrae
     e foi uma experiência muito enriquecedora. Com carga horária de 
     8 horas, ele trouxe uma visão prática e estratégica sobre como 
     liderar, desenvolver e manter equipes engajadas e produtivas, 
     algo essencial para qualquer negócio.<br><br>

      <strong>O curso foi dividido em 5 módulos:</strong><br>
     • <em><strong>A gestão de pessoas no contexto atual</strong>:</em>
     Esse módulo me fez refletir sobre o papel da liderança no cenário 
     atual. Aprendi como a gestão de pessoas impacta diretamente nos
      resultados da empresa e como ela precisa estar alinhada com os 
      objetivos do negócio.<br>
     • <em><strong>Recrutamento e seleção de pessoas</strong>:</em>
     Aqui aprendi técnicas para atrair e escolher os profissionais certos.
      Foi interessante entender como montar processos seletivos mais 
      eficientes e como identificar talentos que realmente se encaixam 
      na cultura da empresa.<br>
     • <em><strong>Desenvolvimento de equipes</strong>:</em>
     Um dos pontos altos do curso. Aprendi como uma liderança inspiradora
      pode transformar o ambiente de trabalho. Foram apresentadas 
      estratégias para motivar, engajar e valorizar cada membro da equipe.<br>
     • <em><strong>Liderança e motivação</strong>:</em>
     Um dos pontos altos do curso. Aprendi como uma liderança inspiradora 
     pode transformar o ambiente de trabalho. Foram apresentadas 
     estratégias para motivar, engajar e valorizar cada membro da equipe.<br>
     • <em><strong>Gestão de conflitos em equipe</strong>:</em>
     Esse módulo trouxe ferramentas para lidar com situações delicadas de
      forma construtiva. Aprendi a identificar conflitos, mediar conversas
       e buscar soluções que mantenham a harmonia e o foco nos resultados.<br><br>
     
       No geral, o curso foi muito bem estruturado e direto ao ponto. 
       Cada módulo trouxe exemplos práticos e reflexões que me ajudaram a
        enxergar a gestão de pessoas como uma área estratégica, e não
         apenas operacional. Saí com mais clareza sobre como formar 
         equipes fortes, lidar com desafios humanos e criar um ambiente 
         de trabalho saudável e produtivo.<br>
    `
   },

 cert11: {
    titulo: "Formação em Liderança",
    imagem: "imagens/Certificado11.jpg",
    descricao:
    `Concluí esse curso Formação em Liderança em 12 Setembro de 2023, pela
     Conquer e foi uma experiência muito
     inspiradora. Com carga horária de 8 horas, ele foi direto ao ponto e
      trouxe uma abordagem moderna e prática sobre o que significa liderar
       de verdade, com empatia, estratégia e visão de futuro.<br><br>

      <strong>O curso foi dividido em 5 módulos:</strong><br>
     • <em><strong>A base vem forte</strong>:</em>
     Esse módulo me fez repensar o que é ser líder. Aprendi que liderança 
     vai muito além de cargo ou autoridade, envolve autenticidade, 
     responsabilidade e influência. Foi interessante entender os 
     diferentes perfis de liderança e como encontrar o meu estilo.<br>
     • <em><strong>Assumindo a responsa</strong>:</em>
     Aqui mergulhei nos desafios da liderança na nova economia. Aprendi
      sobre transformação digital, design organizacional e como liderar
       em ambientes em constante mudança. Esse módulo me mostrou que um 
       bom líder precisa ser adaptável e ambidestro — capaz de equilibrar
       inovação com estabilidade.<br>
     • <em><strong>Comunicação e influência</strong>:</em>
     Esse foi um dos meus favoritos. Aprendi técnicas de comunicação
      assertiva, como dar e receber feedbacks construtivos, delegar com 
      clareza e tomar decisões com segurança. Também entendi como criar
       um ambiente de confiança e promover segurança psicológica na equipe.<br>
     • <em><strong>Liderança estratégica</strong>:</em>
     Nesse módulo, aprendi sobre contratação, ambientação de novos
      colaboradores, definição de metas e motivação. Foi muito útil 
      entender como alinhar objetivos com a cultura da empresa e como 
      liderar times diversos e multiculturais.<br>
     • <em><strong>Olhando para o futuro</strong>:</em>
     O último módulo trouxe uma visão sobre liderança em tempos de
      mudança. Aprendi sobre inovação, diversidade, benchmarking e até 
      sobre como construir uma carreira internacional. Foi inspirador 
      pensar na liderança como algo que evolui junto com o mundo.<br><br>

      No geral, o curso foi leve, dinâmico e muito prático. Cada módulo 
      trouxe ferramentas que eu já comecei a aplicar no meu dia a dia. 
      Saí com uma visão mais clara sobre o papel do líder e com mais 
      segurança para assumir responsabilidades, engajar pessoas e gerar 
      impacto positivo. Sem dúvida, foi uma formação que agregou muito ao
       meu desenvolvimento pessoal e profissional.<br>

    `
  },
















   cert10: {
    titulo: "Inteligência Artificial e o Novo Contexto da Cultura Digital",
    imagem: "imagens/Certificado10.jpg",
    descricao: 
    `Concluí esse curso em 20 Agosto de 2023 na Fundação Bradesco e foi uma experiência muito
     enriquecedora. Com carga horária de 20 horas, ele me ajudou a 
     entender como a inteligência artificial está cada vez mais presente
      no nosso dia a dia — não só na tecnologia, mas também na forma como
       nos comunicamos, aprendemos e vivemos.<br><br>

       <strong>O curso foi dividido em 4 módulos:</strong><br>
      • <em><strong>Contexto e relevância da IA</strong>:</em>Esse módulo
       abriu minha mente para o impacto da IA na sociedade atual. Aprendi
        como ela está presente em aplicativos, redes sociais, plataformas
         de streaming e até em decisões que influenciam nosso 
         cotidiano.<br>
      • <em><strong>Cultura digital na contemporaneidade</strong>:</em>Aqui
       entendi como a tecnologia molda nossos comportamentos e relações. 
       Foi interessante perceber como a IA influencia até mesmo a forma 
       como nos expressamos e interagimos online.<br>
      • <em><strong>Dados e direitos digitais</strong>:</em>Esse foi um 
      dos módulos mais importantes. Aprendi sobre privacidade, segurança 
      e legislação digital — incluindo a LGPD, o Marco Civil da Internet 
      e a Lei de Acesso à Informação. Me fez refletir sobre o uso
       consciente da tecnologia e a importância de proteger nossos 
       dados.<br>
      • <em><strong>IA na educação</strong>:</em>Descobri como a 
      inteligência artificial pode ser usada para melhorar o ensino,
       com plataformas adaptativas e ferramentas que ajudam tanto alunos
        quanto professores. Foi inspirador.<br><br>

     Um dos módulos que mais gostei foi sobre privacidade e direitos 
     digitais. Aprendi sobre leis como a LGPD e o Marco Civil da Internet,
      e isso me fez pensar bastante sobre como usamos nossos dados online.
       No final, o curso mostra como a IA pode ser usada na educação, com
        ferramentas que ajudam alunos e professores.<br><br>

    Foi uma formação rápida, mas que me deu uma visão bem atual sobre
     tecnologia e sociedade. Valeu muito a pena — e com certeza agregou
      ao meu conhecimento e ao meu portfólio.
`
  },

    cert9: {
    titulo: "Master Class - Curricularização da Extensão",
    imagem: "imagens/Certificado9.jpg",
    descricao: 
    `  
    Participar desta Master Class no dia 16 de Agosto de 2023,pela 
    Uniasselvi (Centro Universitário Leonardo Da Vinci), foi 
    uma oportunidade valiosa para 
    compreender como integrar atividades de extensão diretamente ao 
    currículo acadêmico. Em apenas 2 horas, explorei conceitos 
    fundamentais, diretrizes legais e práticas de planejamento, e
    xecução e avaliação de projetos que conectam a universidade à 
    comunidade. A experiência me mostrou que a extensão vai muito 
    além de cumprir requisitos: ela potencializa a formação, fortalece
    vínculos sociais e torna o aprendizado mais significativo.<br><br>

    <strong>O curso foi dividido em 3 módulos:</strong><br>
    • <em><strong>Fundamentos e Conceitos</strong>:</em>
    Mergulhei nos princípios da extensão universitária e em sua
     função transformadora na educação. Discutimos definições, 
     objetivos sociais e acadêmicos, e fizemos uma comparação clara 
     entre extensão, pesquisa e ensino. Debater exemplos reais de 
     projetos bem-sucedidos permitiu enxergar como a extensão pode 
     ser um motor de mudança dentro e fora da instituição.<br>
    • <em><strong>Planejamento de Atividades e Projetos</strong>:</em>
    Abordamos o desenho completo de projetos de extensão. Aprendi a 
    identificar demandas reais da comunidade, definir objetivos
     claros, estabelecer indicadores de sucesso e organizar 
     cronogramas eficientes. Ainda explorei casos de Projetos
    Pedagógicos de Curso, mostrando como alinhar as metas sociais
    às competências exigidas pela matriz curricular.<br>
    • <em><strong>Execução, Monitoramento e Avaliação</strong>:</em>
    No momento da execução, descobri quais ferramentas usar para 
    coletar dados — de entrevistas a questionários — e como medir
     impactos acadêmicos e sociais. Pratiquei ajustes em tempo real 
     para otimizar resultados e participei de uma simulação de reunião
      de prestação de contas. Essa etapa consolidou a importância de 
      feedback contínuo e da transparência na gestão de projetos de 
      extensão.<br><br>

      O curso foi dinâmico e interativo, combinando exposições 
      teóricas com estudos de caso e dinâmicas em pequenos grupos. 
      A concisão das atividades permitiu aplicar cada conceito 
      imediatamente, gerando insights práticos. Além de ampliar minha 
      rede de contatos entre profissionais de diferentes áreas, 
      recebi materiais de apoio que agora uso como referência em 
      novos projetos. Concluí a Master Class com uma visão clara de 
      como a curricularização da extensão fortifica o papel social da 
      universidade e enriquece a trajetória dos estudantes.<br>
    `
    },









  cert8: {
    titulo: "Crie um site simples usando HTML, CSS e JAVASCRIPT",
    imagem: "imagens/Certificado8.jpg",
    descricao: `
    Concluí esse curso introdutório em desenvolvimento web pela Fundação 
    Bradesco em 31 de Julho de 2023, com duração de 2 horas. Apesar de ser curto, foi direto ao
     ponto e muito útil para quem está começando. A proposta era criar um
      site simples, combinando estrutura, estilo e interatividade e foi
       exatamente isso que fiz.<br><br>

   <strong>O curso foi dividido em 4 módulos:</strong><br>
    • <em><strong>Estrutura do aplicativo web</strong>:</em> Comecei 
    aprendendo como organizar os arquivos e pastas do projeto. Essa parte 
    foi essencial para entender a base de qualquer site e preparar o 
    ambiente de trabalho.<br>
    • <em><strong>HTML básico</strong>:</em> Aqui mergulhei nas principais
     tags que dão forma ao conteúdo: títulos, parágrafos, listas, links 
     e imagens. Foi empolgante ver como uma página começa a ganhar vida
      com apenas algumas linhas de código.<br>
    • <em><strong>Estilização com CSS</strong>:</em>Esse módulo foi onde
     o visual começou a aparecer. Aprendi a aplicar cores, fontes, 
     espaçamentos e posicionamentos. Ver o site se transformar com
      estilo foi uma das partes mais legais.<br>
    • <em><strong>Interatividade com JavaScript</strong>:</em> Por fim, 
    adicionei funcionalidades simples como cliques e alertas. Foi ótimo
     entender como o JavaScript dá movimento e resposta ao que o usuário
      faz na página.<br><br>
   
    Durante o curso, utilizei o <strong>Visual Studio Code</strong> como editor de código 
    e testei tudo diretamente no navegador. Mesmo sendo uma introdução, 
    me deu uma boa noção de como <strong>HTML</strong>, <strong>CSS</strong> 
    e <strong>JavaScript</strong> trabalham juntos.<br><br>

    Essa experiência me motivou a continuar estudando e aprimorando meus 
    projetos. Foi um ótimo ponto de partida para entender como os sites 
   funcionam por trás das cortinas e me deu ainda mais vontade de seguir 
   na área de desenvolvimento web.
  `
  },
 
  cert7: {
    titulo: "Como escalar na nuvem para atrair financiamento?",
    imagem: "imagens/Certificado7.jpg",
    descricao: 
    `Concluí esse curso em 23 Julho de 2023, com carga horária de 2 horas, pela Ka Solution.
     Apesar de ser uma formação rápida, foi bastante objetiva e trouxe 
     insights valiosos sobre como startups e negócios digitais podem usar
      a computação em nuvem como estratégia para crescer e atrair 
      investidores, abordando os principais pontos que conectam 
      tecnologia e viabilidade financeira.<br><br>

      <strong>O curso foi dividido em 4 módulos:</strong><br>
      • <em><strong>Escalabilidade como diferencial competitivo</strong>:</em>
      Aprendi como a nuvem permite que empresas cresçam de forma flexível,
       sem precisar investir pesado em infraestrutura física. Isso torna 
       o negócio mais ágil e preparado para mudanças de mercado.<br>
      • <em><strong>Redução de custos e otimização de recursos</strong>:</em>
      O conteúdo mostrou como migrar para a nuvem pode ajudar a reduzir
       despesas operacionais, melhorar o uso de recursos e aumentar a 
       eficiência — fatores que chamam atenção de investidores.<br>
      • <em><strong>Modelos de negócio baseados em nuvem</strong>:</em>
      Foi interessante entender como empresas que adotam soluções cloud 
      conseguem oferecer serviços mais escaláveis e personalizados, o que
       aumenta o valor percebido pelo mercado.<br>
      • <em><strong>Indicadores que atraem investimento</strong>:</em>
      O curso também trouxe dicas sobre como apresentar métricas de 
      desempenho, uso de tecnologia e escalabilidade em pitchs e reuniões 
      com investidores.<br><br>

      Foi uma experiência rápida, mas muito útil para entender como a
       tecnologia pode ser usada estrategicamente para impulsionar o 
       crescimento de um negócio e torná-lo mais atrativo para 
       financiamento.<br>
    `
  },

    cert6: {
    titulo: "Linguagem de Programação Java-Avançado",
    imagem: "imagens/Certificado6.jpg",
    descricao: 
    `Concluí esse curso em 20 Julho de 2023 na Fundação Bradesco e foi 
    uma experiência muito positiva. Com carga horária de 16 horas, 
    ele me ajudou a aprofundar os conhecimentos que eu já tinha em 
    Java e a aplicar a linguagem de forma mais profissional e 
    estruturada.<br><br>

    <strong>O curso foi dividido em 6 módulos:</strong><br>
    • <em><strong>Programação orientada a objetos avançada</strong>:</em>Esse
     módulo revisou os fundamentos da orientação a objetos, mas com uma
      abordagem mais profunda. Aprendi a trabalhar com herança, 
      polimorfismo, encapsulamento, interfaces e classes abstratas, tudo 
      com exemplos que mostravam como esses conceitos funcionam em
       projetos reais.<br>
    • <em><strong>Tratamento de exceções</strong>:</em>Aqui entendi como 
    lidar com erros de forma segura e eficiente. Aprender a tratar 
    exceções corretamente me deu mais confiança para desenvolver 
    aplicações robustas e estáveis.<br>
    • <em><strong>Acesso a banco de dados com JDBC</strong>:</em>Esse foi
     um dos módulos mais marcantes. Aprendi a conectar aplicações Java a
      bancos de dados, realizar consultas e manipular registros. Foi um 
      divisor de águas para mim, pois abriu a possibilidade de criar 
      sistemas completos com persistência de dados.<br>
    • <em><strong>Manipulação de arquivos</strong>:</em>Aprendi a ler e 
    escrever arquivos externos, o que é essencial para lidar com dados 
    fora do sistema. Esse módulo mostrou como trabalhar com arquivos de 
    forma prática e segura.<br>
    • <em><strong>Coleções em Java</strong>:</em>Esse módulo abordou 
    estruturas como listas, mapas e conjuntos. Entender como organizar 
    e acessar grandes volumes de dados com eficiência foi fundamental 
    para melhorar a lógica dos meus projetos.<br>
    • <em><strong>Threads e processamento paralelo</strong>:</em>Por fim,
     aprendi sobre execução de tarefas simultâneas com threads. 
     Esse conteúdo me ajudou a entender como melhorar o desempenho das 
     aplicações e lidar com múltiplos processos ao mesmo tempo.<br><br>

     O curso foi bem estruturado, com explicações claras e exemplos 
     práticos. Cada módulo trouxe algo novo e aplicável, e no final 
     me senti muito mais preparado para desenvolver projetos em Java
      com qualidade, segurança e eficiência.<br>
    `
  },











    cert5: {
    titulo: "Linguagem de Programação Java-Básico",
    imagem: "imagens/Certificado5.jpg",
    descricao: 
    `Concluí esse curso em 12 Julho de 2023 pela Fundação Bradesco, com carga horária de 5 horas. 
    Apesar de ser uma formação rápida, foi essencial para consolidar os 
    fundamentos da linguagem Java e me preparar para os cursos mais 
    avançados que vieram depois.<br><br>

    <strong>O curso foi dividido em 5 módulos:</strong><br>
    • <em><strong>Introdução à linguagem Java</strong>:</em>Aprendi sobre
     a história da linguagem, suas principais características e onde ela
      é usada no mercado. Foi interessante entender como o Java se tornou
       tão relevante em aplicações web, mobile e corporativas.<br>
    • <em><strong>Instalação e configuração do ambiente</strong>:</em>Esse
     módulo me ensinou a instalar o JDK e configurar o ambiente de
      desenvolvimento. Também aprendi a usar o terminal e os primeiros
       comandos para compilar e executar programas Java.<br>
    • <em><strong>Estrutura básica de um programa Java</strong>:</em>Aqui
     entendi como funciona a sintaxe da linguagem, como declarar 
     variáveis, usar operadores, estruturas condicionais e de repetição.
      Foi o primeiro contato com a lógica aplicada diretamente no código.
      <br>
    • <em><strong>Orientação a objetos – introdução</strong>:</em>Mesmo 
    sendo um curso básico, ele já introduziu conceitos como classes,
     objetos, atributos e métodos. Isso me ajudou a entender a base da 
     programação orientada a objetos, que é o coração do Java.<br>
    • <em><strong>Boas práticas e resolução de erros comuns</strong>:</em>Por 
    fim, aprendi a identificar erros simples de sintaxe e lógica, além de
     aplicar boas práticas para escrever um código mais limpo e organizado.
     <br><br>

     Foi uma ótima porta de entrada para o universo Java. O curso me deu
      segurança para seguir para o nível avançado e começar a desenvolver
       meus próprios projetos com mais clareza e estrutura.<br>
    `
  },

     cert4: {
    titulo: "Como lançar um MVP na nuvem pronto para escalar",
    imagem: "imagens/Certificado4.jpg",
    descricao:
    `Concluí esse curso em 11 Julho de 2023, com carga horária de 2 horas, 
    pela Ka Solution. Foi uma formação rápida, mas muito prática e 
    estratégica, voltada para quem quer tirar ideias do papel e 
    transformar em produtos viáveis com potencial de crescimento.<br><br>

    O curso me mostrou como usar a nuvem para lançar um MVP (Produto 
    Mínimo Viável) de forma inteligente, com foco em escalabilidade e 
    eficiência desde o início. Aprendi a estruturar um ambiente técnico
     enxuto, mas funcional, capaz de validar uma solução com clientes
      reais e preparar o terreno para evoluções futuras. Trouxe exemplos 
      reais e dicas valiosas sobre como apresentar um MVP a investidores,
      mostrando não só o produto, mas também a capacidade de escalar com
       baixo custo e alta eficiência.<br><br>
    
    <strong>O curso foi dividido em 3 módulos:</strong><br>
    • <em><strong>Conceito de MVP e visão estratégica</strong>:</em>Esse
     módulo trouxe uma visão clara do que é um MVP (Produto Mínimo Viável)
      e como ele deve ser pensado desde o início com foco em 
      escalabilidade. Aprendi que lançar algo simples não significa 
      lançar algo frágil — e que o planejamento técnico desde o começo 
      é o que garante crescimento sustentável.<br>
    • <em><strong>Arquitetura na nuvem para MVPs</strong>:</em>Aqui 
    entendi como montar uma infraestrutura enxuta e eficiente usando
     serviços da AWS. Aprendi a escolher os recursos certos para validar 
     uma solução sem gastar demais, mas com flexibilidade para escalar 
     conforme o produto evolui. Foi muito útil ver como desacoplar
      componentes e aplicar boas práticas de arquitetura desde o primeiro 
      deploy.<br>
    • <em><strong>Preparando o MVP para atrair investidores</strong>:</em>
    Esse módulo foi voltado para estratégia de negócio. 
    Aprendi como apresentar um MVP de forma profissional, 
    destacando métricas, estrutura técnica e potencial de 
    crescimento. Foi interessante entender como a tecnologia pode ser 
    usada como argumento de valor em reuniões com investidores.<br><br>

    No geral, o curso foi direto ao ponto e me ajudou a conectar 
    desenvolvimento ágil com visão de negócio. Saí com uma noção muito
    mais clara de como lançar um produto funcional, seguro e pronto para 
    crescer — e como usar a nuvem como aliada nesse processo. Foi uma
     experiência rápida, mas que agregou bastante ao meu conhecimento
      técnico e estratégico.<br>
    `
  },









    cert3: {
    titulo: "AWS Cloud Economics for Startups",
    imagem: "imagens/Certificado3.jpg",
    descricao: 
    `Concluí esse curso em 13 Junho de 2023, com carga horária de 3 horas  pela Ka Solution.
     Foi uma introdução rápida e objetiva sobre como startups podem se 
     beneficiar economicamente ao utilizar os serviços da AWS. O conteúdo
      foi dividido em cinco módulos curtos, com estudos de caso e exemplos
       reais.<br><br>

      <strong>O curso foi dividido em 4 módulos:</strong><br>
      • <em><strong>Vantagens da AWS para startups</strong>:</em>Aprendi 
      como a nuvem pode reduzir custos, aumentar a produtividade e
       oferecer escalabilidade para negócios em crescimento.<br>
      • <em><strong>Cloud Value Framework</strong>:</em>Esse módulo 
      mostrou como avaliar os benefícios da nuvem em quatro pilares:
       redução de custos, agilidade, resiliência e produtividade.<br>
      • <em><strong>Estudo de caso prático</strong>:</em>Acompanhei 
      exemplos de startups que escalaram seus serviços com elasticidade
       e modelos de preços adequados, o que me ajudou a visualizar como 
       aplicar isso em projetos reais.<br>
      • <em><strong>Planejamento de infraestrutura</strong>:</em>Entendi
       como escolher o tipo de armazenamento, calcular orçamento e 
       estruturar serviços de forma eficiente na nuvem.<br><br>

       Foi uma formação rápida, mas muito útil para entender os 
       fundamentos econômicos da AWS e como aplicar esses conceitos 
       em soluções escaláveis.<br.
    `
  },
  
    cert2: {
    titulo: "Semana Acadêmica do Bem-Estar: O poder da escolha na qualidade de vida",
    imagem: "imagens/Certificado2.jpg",
    descricao: 
    `
    Participar desta semana acadêmica no dia 7 de Junho de 2023, pela 
    Uniasselvi (Centro Universitário Leonardo Da Vinci), 
    me levou a refletir sobre como escolhas simples definem nosso dia a
    dia. Em apenas 2 horas intensas, explorei desde a teoria da 
    decisão consciente até práticas que facilitam a incorporação de
    hábitos saudáveis. Foi um mergulho breve, mas repleto de 
    insights que já apliquei na minha rotina. A experiência 
    combinou teoria, exercícios práticos e trocas de ideias em
    grupo.<br><br>

    <strong>O curso foi dividido em 4 módulos:</strong><br>
    • <em><strong>Fundamentos do poder da escolha</strong>:</em>
    Neste módulo, entendi como cada decisão impacta diretamente nossa 
    qualidade de vida e saúde física. Identifiquei padrões de 
    comportamento repetidos e avaliei seus efeitos a longo prazo. 
    Discutimos exemplos reais de escolhas positivas e negativas, 
    abrindo espaço para ajustes rápidos em meus hábitos diários.
    Aprendi que a consciência sobre pequenas decisões é o ponto de 
    partida para mudanças duradouras.<br>
    • <em><strong>Nutrição e movimento como atos de escolha</strong>:</em>
    Aqui, descobri estratégias para transformar a alimentação 
    equilibrada e a atividade física em práticas fáceis de seguir. 
    Planejei refeições simples e criei micro-hábitos de exercício ao 
    longo do dia, como alongamentos rápidos durante o trabalho. 
    Recebi orientações práticas de nutricionistas e educadores 
    físicos, que mostraram como incorporar esses cuidados sem grandes
    mudanças na rotina. Percebi que decisões conscientes produzem
    benefícios imediatos no bem-estar.<br>
    • <em><strong>Saúde mental e gestão do estresse</strong>:</em>
    Neste momento, aprendi técnicas de respiração, atenção plena 
    (mindfulness) e identificação de gatilhos emocionais para
    preservar o equilíbrio emocional. A prática de pausas conscientes
    e meditações guiadas trouxe clareza e diminuiu a sensação de 
    sobrecarga. Compreendi que escolher dedicar tempo ao autocuidado
    é tão importante quanto agir. Esses recursos me ajudaram a 
    inserir o bem-estar mental na minha rotina de forma sustentável.<br>
    • <em><strong>Planejamento e aplicação prática</strong>:</em>
    No último módulo, elaborei um plano de ação pessoal com metas de
    bem-estar de curto e médio prazo. Defini um cronograma de 
    autoavaliação semanal e criei um diário para registrar escolhas e 
    resultados. Esse exercício forneceu um roteiro claro para manter 
    a disciplina e acompanhar meu progresso. Percebi que planejar 
    intencionalmente cada passo faz toda a diferença na manutenção 
    dos hábitos.<br><br>

    A Semana Acadêmica do Bem-Estar mostrou que o poder da escolha 
    vai muito além de decisões isoladas. Cada ação consciente constrói
    um caminho mais saudável e equilibrado. Saí deste curso equipado 
    com ferramentas práticas para melhorar minha qualidade de vida 
    imediatamente e com uma visão clara de como sustentar esses 
    hábitos a longo prazo.<br>
    `
    },

      cert1: {
    titulo: "Semana Acadêmica do Bem-Estar",
    imagem: "imagens/Certificado1.jpg",
    descricao:
    `
    Em 6 de junho de 2023, concluí a Semana Acadêmica do Bem-Estar pela 
    Uniasselvi (Centro Universitário Leonardo Da Vinci), um encontro 
    de apenas 2 horas que me convidou a olhar para o dia a dia 
    como uma série de escolhas conscientes capazes de melhorar a saúde 
    e a qualidade de vida.<br><br>
    
    <strong>O curso foi dividido em 4 módulos:</strong><br>
    • <em><strong>Consciência sobre pequenas escolhas</strong>:</em>
    No primeiro módulo, mergulhei na importância das pequenas decisões.
    Identifiquei hábitos repetidos, avaliei seus efeitos a longo 
    prazo e discuti com colegas exemplos de atitudes que nos elevam 
    ou nos prejudicam. Percebi que ganhar clareza sobre esses padrões 
    é o ponto de partida para qualquer mudança sustentável.<br>
    • <em><strong>Nutrição e movimento como aliados</strong>:</em>
    Aprendi a planejar refeições simples, saborosas e equilibradas, 
    além de encaixar micro-hábitos de exercício, como pausas para 
    alongar ou caminhar brevemente, dentro da rotina. Saí com um 
    roteiro de ajustes práticos que se encaixam no dia a dia sem 
    grandes esforços.<br>
    • <em><strong>Gerenciamento do estresse e saúde mental</strong>:</em>
    Voltamos nosso olhar para a saúde mental e o estresse. Fui 
    apresentado a técnicas de respiração, práticas de mindfulness e 
    formas de reconhecer e lidar com meus gatilhos emocionais. As 
    meditações guiadas me deram clareza imediata, mostrando que 
    dedicar tempo a pausas conscientes faz diferença na produtividade 
    e no bem-estar.<br>
    • <em><strong>Plano de ação personalizado</strong>:</em>
    Reuni teoria e prática ao elaborar meu próprio plano de ação. 
    Defini metas de bem-estar para as próximas semanas, criei um 
    cronograma de autoavaliação e idealizei um diário de escolhas e 
    resultados. Esse exercício final me proporcionou um roteiro claro 
    para acompanhar meu progresso e manter os novos hábitos.<br><br>

    O curso foi dinâmico e interativo, mesclando apresentações breves, 
    debates em grupo e atividades hands-on. Em poucas horas, absorvi 
    ferramentas simples e eficazes, troquei experiências com colegas 
    e saí confiante de que escolhas conscientes são o caminho mais 
    curto para uma vida mais equilibrada e saudável.<br>
    `
  },
   
};






function abrirCertificado(id) {
  const modal = document.getElementById("modal");
  const conteudo = document.getElementById("modal-conteudo");
  const cert = certificados[id];

  if (cert) {
    conteudo.innerHTML = `
      <button class="btn-fechar" onclick="fecharModal()">×</button>
      <div class="galeria-modal">
        <img src="${cert.imagem}" alt="${cert.titulo}" style="width:100%; border-radius:8px; margin:20px 0;">
      </div>
      <h2>Certificado: ${cert.titulo}</h2>
      <p>${cert.descricao}</p>
    `;
    modal.style.display = "flex";
    document.getElementById("conteudo-site").classList.add("embaçado");
  }
}



function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("conteudo-site").classList.remove("embaçado");
}

