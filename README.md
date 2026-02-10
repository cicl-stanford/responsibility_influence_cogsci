# Responsibility for influencing others

This repository contains the experiments, data, and analyses for the paper "Responsibility for others", submitted to CogSci 2026.

__Contents:__
- [Introduction](#introduction)
- [Preregistrations](#preregistrations)
- [Repository structure](#repository-structure)

## Introduction

Collective outcomes often result from complex social dynamics where individuals both contribute directly and also shape each other's contributions. How do we hold people responsible for an outcome when their actions influence others? Here, we examine how an individual's role within a group (whether they can influence others, be influenced by others, or act independently) affects how responsible they are judged. Across three experiments spanning both social and physical settings, we find that people systematically assign greater responsibility to those who can influence others. Furthermore, influencers with knowledge of their potential impact were held more responsible than those who were unaware. The relative responsibility of individuals who were influenced by others and who acted independently differed by context. Together, these results show that we hold others responsible by considering not only how their actions directly affect the outcome, but also how they affect others' propensity to act.  

## Preregistrations

Preregistrations for all experiments are available on the Open Science Framework (OSF):

- [Experiment 1](https://osf.io/7n983/overview?view_only=19eec2fe6c124a8b9edac1eb9970e68a) (visible voting)
- [Experiment 2](https://osf.io/6f749/overview?view_only=e21cd41c7d6a44aebf2b29ae017b584a) (mechanical system)
- [Experiment 3](https://osf.io/a5ntq/overview?view_only=5a1b27245a914b79a09f327673c832af) (advised voting)


## Repository structure

```
├── analysis
├── data
│   ├── experiment1
│   ├── experiment2
│   └── experiment3
├── docs
│   ├── experiment1
│   ├── experiment2
│   └── experiment3
└── figures
```

- `analysis`: contains all the code for analyzing data and generating figures
- `data`: contains anonymized data from all three experiments.
  For each experiment, `participants.csv` contains demographic information and post-experiment feedback and comments, and `trials.csv` contains the response data.
- `docs`: contains the experiment code. You can preview the experiments below:
  - [Experiment 1](https://anonymous.4open.science/w/responsibility_influence_cogsci-C1EF/experiment1/) (visible voting)
  - [Experiment 2](https://anonymous.4open.science/w/responsibility_influence_cogsci-C1EF/experiment2/) (mechanical system)
  - [Experiment 3](https://anonymous.4open.science/w/responsibility_influence_cogsci-C1EF/experiment3/) (advised voting)
