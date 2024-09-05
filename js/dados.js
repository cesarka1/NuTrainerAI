let exercicios = [
    {
        Nome: "Supino Reto com Barra",
        Equipamento: "Barra e Halteres",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Exercício composto que trabalha o peitoral, ombros e tríceps, realizado em um banco plano com a barra."
    },
    {
        Nome: "Supino Inclinado com Halteres",
        Equipamento: "Halteres",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/developpe-incline-halteres-exercice-musculation.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Trabalha a parte superior do peitoral, proporcionando maior envolvimento dos deltoides frontais."
    },
    {
        Nome: "Flexões",
        Equipamento: "Peso Corporal",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-musculation.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Exercício de peso corporal que fortalece o peitoral, ombros e tríceps, mantendo o corpo reto."
    },
    {
        Nome: "Peck Deck",
        Equipamento: "Máquina",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/pec-deck-butterfly-exercice-musculation.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Exercício de isolamento realizado em máquina para maximizar a contração do músculo peitoral."
    },
    {
        Nome: "Crossover",
        Equipamento: "Cabos",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/ecarte-poulie-vis-a-vis-exercice-musculation-pectoraux.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Movimento de adução do peitoral realizado com polias para definição e fortalecimento."
    },
    {
        Nome: "Crucifixo Inclinado com Halteres",
        Equipamento: "Halteres",
        Link: "https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecartes-incline-avec-halteres.gif",
        MusculoTrabalhado: "Peito",
        Descricao: "Isolamento do peitoral superior com halteres, aumentando a amplitude de movimento e alongamento."
    },
    {
        Nome: "Supino Declinado com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Peito",
        Descricao: "Focado na parte inferior do peitoral, realizado em um banco declinado para maximizar o trabalho dessa região."
    },
    {
        Nome: "Crucifixo com Cabos",
        Equipamento: "Cabos",
        Link: "",
        MusculoTrabalhado: "Peito",
        Descricao: "Exercício de isolamento realizado em pé com polias, promovendo uma contração muscular intensa do peitoral."
    },
    {
        Nome: "Peck Deck com Dropset",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Peito",
        Descricao: "Versão avançada do Peck Deck utilizando dropsets para aumentar a intensidade e hipertrofia muscular."
    },
    {
        Nome: "Agachamento Livre",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Pernas",
        Descricao: "Exercício multiarticular que trabalha quadríceps, glúteos e posteriores de coxa, essencial para força e volume muscular."
    },
    {
        Nome: "Leg Press",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Pernas",
        Descricao: "Exercício em máquina que foca nos quadríceps, glúteos e posterior de coxa, com variação de carga."
    },
    {
        Nome: "Cadeira Extensora",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Quadríceps",
        Descricao: "Isolamento dos quadríceps, proporcionando máxima ativação durante a extensão dos joelhos."
    },
    {
        Nome: "Cadeira Flexora",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Posterior de Coxa",
        Descricao: "Trabalha de forma isolada os músculos posteriores da coxa, ideal para definição e força."
    },
    {
        Nome: "Elevação de Panturrilha",
        Equipamento: "Peso Corporal",
        Link: "",
        MusculoTrabalhado: "Panturrilha",
        Descricao: "Fortalece os músculos da panturrilha, realizado em pé ou sentado, com peso corporal ou carga adicional."
    },
    {
        Nome: "Agachamento Livre com Peso",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Pernas",
        Descricao: "Versão avançada do agachamento, adicionando carga para aumentar a resistência e intensidade."
    },
    {
        Nome: "Leg Press com Dropset",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Pernas",
        Descricao: "Leg press utilizando a técnica de dropset para maximizar o trabalho dos músculos das pernas."
    },
    {
        Nome: "Cadeira Extensora com Isometria",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Quadríceps",
        Descricao: "Inclui uma pausa isométrica durante a extensão, aumentando a resistência e força muscular nos quadríceps."
    },
    {
        Nome: "Cadeira Flexora com Isometria",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Posterior de Coxa",
        Descricao: "Exercício com pausa isométrica para aumentar a intensidade e trabalho dos músculos posteriores da coxa."
    },
    {
        Nome: "Levantamento Terra com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Dorsais",
        Descricao: "Exercício composto que trabalha todo o corpo, especialmente a região lombar, glúteos e posteriores da coxa."
    },
    {
        Nome: "Puxada Aberta com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Costas",
        Descricao: "Foca no aumento da largura das costas, principalmente o grande dorsal, com pegada aberta."
    },
    {
        Nome: "Remada Curvada com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Costas",
        Descricao: "Exercício que trabalha toda a musculatura das costas, enfatizando os músculos da parte superior e média."
    },
    {
        Nome: "Remada Unilateral com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Costas",
        Descricao: "Foca no trabalho unilateral dos músculos dorsais, ajudando na simetria e fortalecimento muscular."
    },
    {
        Nome: "Pulldown com Triângulo",
        Equipamento: "Máquina",
        Link: "",
        MusculoTrabalhado: "Costas",
        Descricao: "Exercício realizado em máquina para fortalecer os músculos das costas com pegada neutra."
    },
    {
        Nome: "Desenvolvimento com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Ombros",
        Descricao: "Exercício composto para os ombros, realizado com barra, focando no deltoide anterior e medial."
    },
    {
        Nome: "Elevação Lateral com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Ombros",
        Descricao: "Isolamento para os ombros, especificamente o deltoide medial, melhorando a largura dos ombros."
    },
    {
        Nome: "Desenvolvimento com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Ombros",
        Descricao: "Trabalha toda a musculatura dos ombros, com maior liberdade de movimento do que com a barra."
    },
    {
        Nome: "Encolhimento com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Trapézio",
        Descricao: "Focado no desenvolvimento do trapézio, realizado com elevação dos ombros segurando halteres."
    },
    {
        Nome: "Elevação Frontal com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Ombros",
        Descricao: "Isola o deltoide anterior, levantando halteres à frente do corpo para fortalecimento."
    },
    {
        Nome: "Tríceps Testa com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Tríceps",
        Descricao: "Exercício de isolamento que trabalha o tríceps, realizado deitado e com a barra movimentada em direção à testa."
    },
    {
        Nome: "Tríceps Pulley",
        Equipamento: "Cabos",
        Link: "",
        MusculoTrabalhado: "Tríceps",
        Descricao: "Trabalha o tríceps através da extensão do cotovelo, usando polia alta."
    },
    {
        Nome: "Rosca Direta com Barra",
        Equipamento: "Barra",
        Link: "",
        MusculoTrabalhado: "Bíceps",
        Descricao: "Exercício clássico para os bíceps, levantando a barra diretamente para frente do corpo."
    },
    {
        Nome: "Rosca Alternada com Halteres",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Bíceps",
        Descricao: "Rosca com halteres, alternando os braços para uma melhor simetria e controle muscular."
    },
    {
        Nome: "Rosca Concentrada",
        Equipamento: "Halteres",
        Link: "",
        MusculoTrabalhado: "Bíceps",
        Descricao: "Exercício de isolamento que foca no pico do bíceps, realizado com o braço apoiado."
    },
];

let treinos = [
    {
        Titulo: "Treino de Peito para Iniciantes",
        Descricao: "Treino focado no desenvolvimento dos músculos peitorais para iniciantes.",
        GrupoMuscular: "Peito",
        Nivel: "Iniciante",
        Exercicios: [
            { Nome: "Supino Reto com Barra", Series: 3, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Supino Inclinado com Halteres", Series: 3, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Flexões", Series: 3, Repeticoes: "8-10", Descanso: 60 },
            { Nome: "Peck Deck", Series: 3, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Crossover", Series: 3, Repeticoes: "10-12", Descanso: 60 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    },
    {
        Titulo: "Treino de Peito para Intermediários",
        Descricao: "Treino avançado para aumento de força e hipertrofia no peito.",
        GrupoMuscular: "Peito",
        Nivel: "Intermediário",
        Exercicios: [
            { Nome: "Supino Reto com Barra", Series: 4, Repeticoes: "8-10", Descanso: 90 },
            { Nome: "Supino Inclinado com Halteres", Series: 4, Repeticoes: "8-10", Descanso: 90 },
            { Nome: "Crucifixo Inclinado com Halteres", Series: 3, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Peck Deck", Series: 4, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Crossover", Series: 4, Repeticoes: "10-12", Descanso: 60 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    },
    {
        Titulo: "Treino de Peito para Avançados",
        Descricao: "Treino intenso para maximizar a hipertrofia e definição dos músculos peitorais.",
        GrupoMuscular: "Peito",
        Nivel: "Avançado",
        Exercicios: [
            { Nome: "Supino Reto com Barra", Series: 5, Repeticoes: "6-8", Descanso: 120 },
            { Nome: "Supino Inclinado com Halteres", Series: 5, Repeticoes: "6-8", Descanso: 120 },
            { Nome: "Supino Declinado com Barra", Series: 4, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Peck Deck", Series: 4, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Crossover", Series: 4, Repeticoes: "10-12", Descanso: 60 },
            { Nome: "Crucifixo com Cabos", Series: 4, Repeticoes: "10-12", Descanso: 60 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    },
    {
        Titulo: "Treino de Pernas para Iniciantes",
        Descricao: "Treino básico para iniciantes fortalecerem as pernas.",
        GrupoMuscular: "Pernas",
        Nivel: "Iniciante",
        Exercicios: [
            { Nome: "Agachamento Livre", Series: 3, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Leg Press", Series: 3, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Cadeira Extensora", Series: 3, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Cadeira Flexora", Series: 3, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Elevação de Panturrilha", Series: 3, Repeticoes: "15-20", Descanso: 30 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    },
    {
        Titulo: "Treino de Pernas para Intermediários",
        Descricao: "Treino focado em ganho de força e volume muscular para pernas.",
        GrupoMuscular: "Pernas",
        Nivel: "Intermediário",
        Exercicios: [
            { Nome: "Agachamento Livre com Peso", Series: 4, Repeticoes: "10-12", Descanso: 90 },
            { Nome: "Leg Press", Series: 4, Repeticoes: "10-12", Descanso: 90 },
            { Nome: "Cadeira Extensora", Series: 4, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Cadeira Flexora", Series: 4, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Elevação de Panturrilha", Series: 4, Repeticoes: "15-20", Descanso: 30 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    },
    {
        Titulo: "Treino de Pernas para Avançados",
        Descricao: "Treino avançado de pernas para máxima hipertrofia e força.",
        GrupoMuscular: "Pernas",
        Nivel: "Avançado",
        Exercicios: [
            { Nome: "Agachamento Livre com Peso", Series: 5, Repeticoes: "6-8", Descanso: 120 },
            { Nome: "Leg Press com Dropset", Series: 4, Repeticoes: "8-10", Descanso: 60 },
            { Nome: "Cadeira Extensora com Isometria", Series: 4, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Cadeira Flexora com Isometria", Series: 4, Repeticoes: "12-15", Descanso: 60 },
            { Nome: "Elevação de Panturrilha", Series: 5, Repeticoes: "15-20", Descanso: 30 }
        ].map(ex => ({ ...ex, ...exercicios.find(e => e.Nome === ex.Nome) }))
    }
];

let dietas = [
    {
        Titulo: "Dieta para Vegetarianos",
        Descricao: "Dieta balanceada para vegetarianos, rica em proteínas vegetais.",
        Objetivo: "Manutenção",
        Refeicoes: [
            {
                Nome: "Almoço",
                Alimentos: ["Lentilha", "Arroz integral", "Salada verde", "Tofu grelhado", "Brócolis"],
                Calorias: 500,
                Macros: {
                    carboidratos: 60,
                    proteinas: 25,
                    gorduras: 15
                }
            },
            {
                Nome: "Jantar",
                Alimentos: ["Quibe de quinoa", "Legumes salteados", "Suco de laranja", "Abacate", "Arroz de couve-flor"],
                Calorias: 450,
                Macros: {
                    carboidratos: 50,
                    proteinas: 20,
                    gorduras: 20
                }
            },
            {
                Nome: "Café da Manhã",
                Alimentos: ["Iogurte natural", "Granola", "Frutas vermelhas", "Sementes de chia", "Mel"],
                Calorias: 350,
                Macros: {
                    carboidratos: 50,
                    proteinas: 15,
                    gorduras: 10
                }
            },
            {
                Nome: "Lanche da Tarde",
                Alimentos: ["Hummus", "Palitos de cenoura", "Torradas integrais", "Frutas secas", "Castanhas"],
                Calorias: 300,
                Macros: {
                    carboidratos: 40,
                    proteinas: 10,
                    gorduras: 15
                }
            },
            {
                Nome: "Ceia",
                Alimentos: ["Chá de ervas", "Biscoitos integrais", "Fruta fresca", "Queijo vegano", "Amêndoas"],
                Calorias: 250,
                Macros: {
                    carboidratos: 30,
                    proteinas: 5,
                    gorduras: 12
                }
            }
        ]
    },
    {
        Titulo: "Dieta para Ganho de Massa Muscular",
        Descricao: "Dieta rica em proteínas e carboidratos para auxiliar no crescimento muscular.",
        Objetivo: "Ganho de Massa",
        Refeicoes: [
            {
                Nome: "Pré-treino",
                Alimentos: ["Banana", "Aveia", "Proteína em pó", "Manteiga de amendoim", "Leite desnatado"],
                Calorias: 300,
                Macros: {
                    carboidratos: 50,
                    proteinas: 20,
                    gorduras: 8
                }
            },
            {
                Nome: "Pós-treino",
                Alimentos: ["Shake de proteína com frutas", "Aveia", "Iogurte grego", "Mel", "Sementes de linhaça"],
                Calorias: 250,
                Macros: {
                    carboidratos: 30,
                    proteinas: 25,
                    gorduras: 5
                }
            },
            {
                Nome: "Café da Manhã",
                Alimentos: ["Ovos mexidos", "Pão integral", "Abacate", "Suco de laranja", "Queijo"],
                Calorias: 500,
                Macros: {
                    carboidratos: 40,
                    proteinas: 30,
                    gorduras: 20
                }
            },
            {
                Nome: "Almoço",
                Alimentos: ["Frango grelhado", "Arroz branco", "Feijão", "Salada de folhas", "Batata doce"],
                Calorias: 600,
                Macros: {
                    carboidratos: 70,
                    proteinas: 40,
                    gorduras: 15
                }
            },
            {
                Nome: "Jantar",
                Alimentos: ["Salmão grelhado", "Quinoa", "Legumes assados", "Azeite de oliva", "Espinafre"],
                Calorias: 550,
                Macros: {
                    carboidratos: 45,
                    proteinas: 35,
                    gorduras: 20
                }
            }
        ]
    },
    {
        Titulo: "Dieta para Emagrecimento",
        Descricao: "Dieta hipocalórica para auxiliar na perda de peso.",
        Objetivo: "Emagrecimento",
        Refeicoes: [
            {
                Nome: "Café da Manhã",
                Alimentos: ["Aveia", "Frutas", "Leite desnatado", "Sementes de girassol", "Mel"],
                Calorias: 300,
                Macros: {
                    carboidratos: 50,
                    proteinas: 10,
                    gorduras: 5
                }
            },
            {
                Nome: "Almoço",
                Alimentos: ["Peito de frango grelhado", "Salada de rúcula", "Quinoa", "Legumes crus", "Azeite de oliva"],
                Calorias: 400,
                Macros: {
                    carboidratos: 30,
                    proteinas: 40,
                    gorduras: 10
                }
            },
            {
                Nome: "Lanche da Tarde",
                Alimentos: ["Iogurte natural", "Frutas", "Granola", "Sementes de chia", "Canela"],
                Calorias: 200,
                Macros: {
                    carboidratos: 30,
                    proteinas: 10,
                    gorduras: 5
                }
            },
            {
                Nome: "Jantar",
                Alimentos: ["Sopa de legumes", "Tofu grelhado", "Salada de alface", "Abacate", "Limão"],
                Calorias: 350,
                Macros: {
                    carboidratos: 40,
                    proteinas: 20,
                    gorduras: 10
                }
            },
            {
                Nome: "Ceia",
                Alimentos: ["Chá de ervas", "Biscoitos integrais", "Fruta fresca", "Iogurte grego", "Amêndoas"],
                Calorias: 150,
                Macros: {
                    carboidratos: 20,
                    proteinas: 5,
                    gorduras: 5
                }
            }
        ]
    },
];
