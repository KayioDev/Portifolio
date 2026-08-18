import type { ProjectType } from "../Types/Projects";

export const projectsData: ProjectType[] = [
    {
        title: "miniRt",

        description: `miniRT é um ray tracer em C que renderiza cenas 3D descritas por arquivo .rt, exibindo o resultado em uma janela via MiniLibX.
        Objetivo principal do projeto:
        implementar interseções geométricas e iluminação básica do zero;
        interpretar uma cena textual e gerar uma imagem por ray tracing;
        manter uma arquitetura modular (parsing, núcleo de ray tracing, UI e utilitários).
        No estado atual, o projeto cobre os elementos obrigatórios (A, C, L, sp, pl, cy) e inclui extensões extras (como co, tr, to, texturas e bump map). `,

        technologies: ["C"],

        githubUrl: "https://github.com/KayioDev/MiniRT",
    },
    {
        title: "Minishell",
        description: `Aqui está a versão traduzida e adaptada para o português, mantendo a estrutura clara e o tom profissional para o seu README ou portfólio:
Minishell é um projeto educacional desenvolvido em C que recria um shell Unix funcional do zero, emulando os comportamentos centrais do Bash. Desenvolvido em dupla, o projeto combina programação de sistemas em baixo nível com práticas sólidas de desenvolvimento colaborativo, divisão de tarefas e integração de código via Git.
Competências & Principais Recursos
Análise Léxica e Parsing: Tokenização da linha de comando, validação de sintaxe e tratamento avançado de aspas simples e duplas.
Árvores de Sintaxe Abstrata (AST): Representação estruturada de comandos para garantir a ordem correta de execução e precedência.
Gerenciamento de Processos e Sinais: Criação e controle de processos (fork, execve, waitpid) aliado ao tratamento de sinais POSIX (Ctrl-C, Ctrl-D, Ctrl-\).
Pipelines e Redirecionamentos: Encadeamento de múltiplos pipes, manipulação de descritores de arquivo (dup2) e suporte a heredocs (<<).
Variáveis de Ambiente e Built-ins: Implementação nativa de comandos essenciais (cd, echo, env, exit, export, pwd, unset) e expansão dinâmica de variáveis ($VAR).

Desenvolvimento em Dupla: Planejamento arquitetural conjunto, code reviews, sincronização de branches e depuração rigorosa de vazamentos de memória (memory leaks com valgrind).`,
        technologies: ["C"],
        githubUrl: "https://github.com/gustavo-bercacollo/minishell"
    }
]