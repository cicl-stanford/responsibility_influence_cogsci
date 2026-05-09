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

- [Experiment 1](https://osf.io/7n983/) (visible voting)
- [Experiment 2](https://osf.io/6f749/) (mechanical system)
- [Experiment 3](https://osf.io/a5ntq/) (advised voting)


## Repository structure

```
├── analysis
│   ├── cache
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
 
## CRediT author statement

*What is a [CRediT author statement](https://www.elsevier.com/authors/policies-and-guidelines/credit-author-statement)?*

| Term                       | Definition                                                                                                                                                                                                    | Chuqi Hu | Tobias Gerstenberg | Sarah A. Wu |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------|-------------|
| Conceptualization          | Ideas; formulation or evolution of overarching research goals and aims                                                                                                                                        | x        | x                  | x           |                 
| Methodology                | Development or design of methodology; creation of models                                                                                                                                                      | x        | x                  | x           |                   
| Software                   | Programming, software development; designing computer programs; implementation of the computer code and supporting algorithms; testing of existing code components                                            | x        |                    |             |                   
| Validation                 | Verification, whether as a part of the activity or separate, of the overall replication/ reproducibility of results/experiments and other research outputs                                                    | x        |                    | x           |                    
| Formal analysis            | Application of statistical, mathematical, computational, or other formal techniques to analyze or synthesize study data                                                                                       | x        |                    | x           |                    
| Investigation              | Conducting a research and investigation process, specifically performing the experiments, or data/evidence collection                                                                                         | x        |                    |             |                    
| Resources                  | Provision of study materials, reagents, materials, patients, laboratory samples, animals, instrumentation, computing resources, or other analysis tools                                                       |          |                    |             |                   
| Data Curation              | Management activities to annotate (produce metadata), scrub data and maintain research data (including software code, where it is necessary for interpreting the data itself) for initial use and later reuse | x        |                    |             |                    
| Writing - Original Draft   | Preparation, creation and/or presentation of the published work, specifically writing the initial draft (including substantive translation)                                                                   | x        |                    | x           |                    
| Writing - Review & Editing | Preparation, creation and/or presentation of the published work by those from the original research group, specifically critical review, commentary or revision – including pre-or postpublication stages     | x        | x                  | x           |                   
| Visualization              | Preparation, creation and/or presentation of the published work, specifically visualization/ data presentation                                                                                                | x        |                    | x           |                    
| Supervision                | Oversight and leadership responsibility for the research activity planning and execution, including mentorship external to the core team                                                                      |          | x                  | x           |                
| Project administration     | Management and coordination responsibility for the research activity planning and execution                                                                                                                   |          | x                  | x           |                  
| Funding acquisition        | Acquisition of the financial support for the project leading to this publication                                                                                                                              |          | x                  |             |                  
