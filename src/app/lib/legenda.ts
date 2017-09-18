import { Component } from '@angular/core';

export class Legenda {

 public dadosLegenda: any = [];

 constructor(){
  this.dadosLegenda =
    [
      {
          campeonato    : 'carioca-2017',
          classificados           : {'A': [1,2], 'B': [1,2], 'C': [1,2], 'D': [1,2], 'E': [1,2]},
          classificados_alias     : {'A': 'CLASSIFICADOS PARA PRIMEIRA FASE (TAÇA GUANABARA)', 'B': 'CLASSIFICADOS PARA SEMIFINAIS DA TAÇA GUANABARA', 'C': 'CLASSIFICADOS PARA SEMIFINAIS DA TAÇA GUANABARA', 'D': 'CLASSIFICADOS PARA SEMIFINAIS DA TAÇA RIO', 'E': 'CLASSIFICADOS PARA SEMIFINAIS DA TAÇA RIO'},
          rebaixados              : {'X': [3,4]},
          rebaixados_alias        : {'X': 'REBAIXAMENTO'}
      },
      {
          campeonato              : 'paulista-2017',
          classificados           : {'A': [1,2], 'B': [1,2],'C': [1,2],'D': [1,2]},
          classificados_alias     : {'A': 'CLASSIFICADOS', 'B': 'CLASSIFICADOS', 'C': 'CLASSIFICADOS', 'D': 'CLASSIFICADOS'}
      },
      {
          campeonato    :           'brasileiro-serie-a-2017',
          classificados           : {'A': [1,2,3,4,5,6]},
          classificados_alias     : {'A': 'LIBERTADORES'},
          semi_classificados_alias: {'A': 'COPA SUL-AMERICANA'},
          semi_classificados      : {'A': [7,8,9,10,11,12]},
          rebaixados              : {'A': [17,18,19,20]},
          rebaixados_alias        : {'A': 'REBAIXAMENTO'}
      },
      {
          campeonato              : 'libertadores-da-america-2017',
          classificados           : {'1': [1,2], '2': [1,2], '3': [1,2], '4': [1,2], '5': [1,2], '6': [1,2], '7': [1,2], '8': [1,2]},
          classificados_alias     : {'1': 'CLASSIFICADOS', '2': 'CLASSIFICADOS', '3': 'CLASSIFICADOS', '4': 'CLASSIFICADOS', '5': 'CLASSIFICADOS', '6': 'CLASSIFICADOS', '7': 'CLASSIFICADOS','8': 'CLASSIFICADOS'}
      },
      {
          campeonato              : 'uefa-champions-league-2017-2018',
          classificados           : {'A': [1,2], 'B': [1,2], 'C': [1,2], 'D': [1,2], 'E': [1,2], 'F': [1,2], 'G': [1,2],'H': [1,2]},
          classificados_alias     : {'A': 'CLASSIFICADOS', 'B': 'CLASSIFICADOS', 'C': 'CLASSIFICADOS', 'D': 'CLASSIFICADOS', 'E': 'CLASSIFICADOS', 'F': 'CLASSIFICADOS', 'G': 'CLASSIFICADOS','H': 'CLASSIFICADOS'},
          rebaixados              : {'A': [3], 'B': [3], 'C': [3], 'D': [3], 'E': [3], 'F': [3], 'G': [3],'H': [3]},
          rebaixados_alias        : {'A': 'LIGA EUROPA', 'B': 'LIGA EUROPA', 'C': 'LIGA EUROPA', 'D': 'LIGA EUROPA', 'E': 'LIGA EUROPA', 'F': 'LIGA EUROPA','G': 'LIGA EUROPA','H': 'LIGA EUROPA'}
      },
      {
          campeonato              : 'uefa-europa-league-2017-2018',
          classificados           : {'A': [1,2],'B': [1,2],'C': [1,2],'D': [1,2],'E': [1,2],'F': [1,2],'G': [1,2],'H': [1,2],'I': [1,2],'J': [1,2],'K': [1,2],'L': [1,2]},
          classificados_alias     : {'A': 'CLASSIFICADOS','B': 'CLASSIFICADOS','C': 'CLASSIFICADOS','D': 'CLASSIFICADOS','E': 'CLASSIFICADOS','F': 'CLASSIFICADOS','G': 'CLASSIFICADOS','H': 'CLASSIFICADOS','I': 'CLASSIFICADOS','J': 'CLASSIFICADOS','K': 'CLASSIFICADOS','L': 'CLASSIFICADOS'}
      },

      {
          campeonato              : 'goiano-2017',
          classificados           : {'A': [1], 'B': [1]},
          classificados_alias     : {'A': 'CLASSIFICADOS'},

          semi_classificados      : {'A': [2,3], 'B': [2,3]},
          semi_classificados_alias: {'A': 'CLASSIFICADOS (2 MELHORES)', 'B': 'CLASSIFICADOS (2 MELHORES)'},

          rebaixados              : {'A': [4,5], 'B': [4,5]},
          rebaixados_alias        : {'A':'REBAIXAMENTO', 'B':'REBAIXAMENTO'}
      },
      {
          campeonato               : 'pernambucano-2017',

          classificados           : {'D': [1,2,3,4]},
          classificados_alias     : {'D': 'CLASSIFICADOS PARA AS SEMIFINAIS'},

          semi_classificados       : {'A' : [1,2], 'B' : [1,2], 'C' : [1,2]},
          semi_classificados_alias : {'A' : 'CLASSIFICADOS PARA HEXAGONAL DO TÍTULO (3 MELHORES)', 'B' : 'CLASSIFICADOS PARA HEXAGONAL DO TÍTULO (3 MELHORES)', 'C' : 'CLASSIFICADOS PARA HEXAGONAL DO TÍTULO (3 MELHORES)'},

          rebaixados               : {'A' : [3], 'B' : [3], 'C' : [3], 'E' : [5,6]},
          rebaixados_alias         : {'A' : 'DISPUTA DO HEXAGONAL DE PERMANÊNCIA', 'B' : 'DISPUTA DO HEXAGONAL DE PERMANÊNCIA', 'C' : 'DISPUTA DO HEXAGONAL DE PERMANÊNCIA', 'E' : 'REBAIXAMENTO'}
      },
      {
          campeonato              : 'alemao-2017-2018',
          classificados           : {'A': [1,2,3,4]},
          semi_classificados      : {'A': [5,6]},
          rebaixados              : {'A': [16,17,18]},
          classificados_alias     : {'A': 'LIGA DOS CAMPEÕES'},
          semi_classificados_alias: {'A': 'LIGA EUROPA'},
          rebaixados_alias        : {'A': 'REBAIXAMENTO'}
      },
      {
          campeonato    : 'alemao-2015-2016',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [16,17,18],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'alemao-2016-2017',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [16,17,18],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-a-2015',
          classificados : [1,2,3,4],
          rebaixados    : [17,18,19,20],
          classificados_alias : 'LIBERTADORES',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-a-2016',
          classificados : [1,2,3,4,5,6],
          rebaixados    : [17,18,19,20],
          classificados_alias : 'LIBERTADORES',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-b-2015',
          classificados : [1,2,3,4],
          rebaixados    : [17,18,19,20],
          classificados_alias : 'SÉRIE A',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-b-2016',
          classificados : [1,2,3,4],
          rebaixados    : [17,18,19,20],
          classificados_alias : 'SÉRIE A',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-b-2017',
          classificados : [1,2,3,4],
          rebaixados    : [17,18,19,20],
          classificados_alias : 'SÉRIE A',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-c-2015',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [9,10],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-c-2016',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [9,10],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-c-2017',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [9,10],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'brasileiro-serie-d-2015',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'brasileiro-serie-d-2016',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [2],
          semi_classificados_alias : '15 MELHORES SEGUNDOS COLOCADOS'
      },
      {
          campeonato    : 'brasileiro-serie-d-2017',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [2],
          semi_classificados_alias : '15 MELHORES SEGUNDOS COLOCADOS'
      },
      {
          campeonato    : 'brasileiro-serie-d-2017',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [2],
          semi_classificados_alias : '15 MELHORES SEGUNDOS COLOCADOS'
      },
      {
          campeonato    : 'espanhol-2015-2016',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'espanhol-2016-2017',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'espanhol-2017-2018',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'frances-2015-2016',
          classificados : [1,2,3],
          semi_classificados : [4],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'frances-2016-2017',
          classificados : [1,2,3],
          semi_classificados : [4],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'frances-2017-2018',
          classificados : [1,2,3],
          semi_classificados : [4],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'ingles-2015-2016',
          classificados : [1,2,3,4],
          semi_classificados : [5],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'ingles-2016-2017',
          classificados : [1,2,3,4],
          semi_classificados : [5],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'ingles-2017-2018',
          classificados : [1,2,3,4],
          semi_classificados : [5],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'italiano-2015-2016',
          classificados : [1,2,3],
          semi_classificados : [4,5],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'italiano-2016-2017',
          classificados : [1,2,3],
          semi_classificados : [4,5],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'italiano-2017-2018',
          classificados : [1,2,3,4],
          semi_classificados : [5,6],
          rebaixados    : [18,19,20],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'portugues-2015-2016',
          classificados : [1,2,3],
          semi_classificados : [4,5],
          rebaixados    : [17,18],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'portugues-2016-2017',
          classificados : [1,2,3],
          semi_classificados : [4,5],
          rebaixados    : [17,18],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'portugues-2017-2018',
          classificados : [1,2,3],
          semi_classificados : [4,5],
          rebaixados    : [17,18],
          classificados_alias : 'LIGA DOS CAMPEÕES',
          semi_classificados_alias : 'LIGA EUROPA',
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'libertadores-da-america-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'paulista-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'paulista-a-2-2017',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [15,16,17,18,19,20],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'paulista-a-2-2016',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [15,16,17,18,19,20],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'paulista-a-3-2017',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [15,16,17,18,19,20],
          rebaixados_alias : 'REBAIXAMENTO',

          classificados_2 : [1],
          classificados_alias_2 : 'CLASSIFICADO PARA FINAL',

          classificados_3 : [1],
          classificados_alias_3 : 'CLASSIFICADO PARA FINAL'
      },
      {
          campeonato    : 'paulista-a-3-2016',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [15,16,17,18,19,20],
          rebaixados_alias : 'REBAIXAMENTO',

          classificados_2 : [1],
          classificados_alias_2 : 'CLASSIFICADO PARA FINAL',

          classificados_3 : [1],
          classificados_alias_3 : 'CLASSIFICADO PARA FINAL'
      },
      {
          campeonato    : 'carioca-2016',

          classificados_A : [1,2,3,4],
          classificados_alias_A : 'CLASSIFICADOS TAÇA GUANABARA',

          semi_classificados_A : [5,6,7,8],
          semi_classificados_alias_A : 'CLASSIFICADOS TAÇA RIO',

          classificados_B : [1,2,3,4],
          classificados_alias_B : 'CLASSIFICADOS TAÇA GUANABARA',

          semi_classificados_B : [5,6,7,8],
          semi_classificados_alias_B : 'CLASSIFICADOS TAÇA RIO',

          classificados_C : [1,2,3,4],
          classificados_alias_C : 'CLASSIFICADOS SEMIFINAIS DA TAÇA GUANABARA',

          semi_classificados_C : [5,6],
          semi_classificados_alias_C : 'CLASSIFICADOS SEMIFINAIS DA TAÇA RIO',

          semi_classificados_D : [1,2],
          semi_classificados_alias_D : 'CLASSIFICADOS SEMIFINAIS DA TAÇA RIO',

          rebaixados_D    : [7,8],
          rebaixados_alias_D : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'gaucho-2017',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [11,12],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'gaucho-2016',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [12,13,14],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'mineiro-2017',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [11,12],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'mineiro-2016',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados    : [11,12],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'copa-do-nordeste-2017',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [2],
          semi_classificados_alias : 'CLASSIFICADOS (3 MELHORES)'
      },
      {
          campeonato    : 'copa-do-nordeste-2016',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [2],
          semi_classificados_alias : 'CLASSIFICADOS (3 MELHORES)'
      },
      {
          campeonato    : 'copa-sao-paulo-2017',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'copa-sao-paulo-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'pernambucano-2016',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS PARA HEXAGONAL DO TÍTULO',
          rebaixados : [2,3,4],
          rebaixados_alias : 'DISPUTA DO HEXAGONAL DE PERMANÊNCIA',
          hexagonal : [1,2,3,4],
          hexagonal_alias : 'CLASSIFICADOS PARA AS SEMIFINAIS',
          hexagonalpermanencia : [5,6],
          hexagonalpermanencia_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'cearense-2017',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',

          rebaixados : [9,10],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'cearense-2016',
          classificados : [1,2,3],
          classificados_alias : 'CLASSIFICADOS',

          rebaixados : [4,5],
          rebaixados_alias : 'DESCENSO',

          hexagonal : [1,2],
          hexagonal_alias : 'CLASSIFICADOS PARA AS SEMIFINAIS',

          descenso : [3,4],
          descenso_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'paranaense-2017',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [11,12],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'paranaense-2016',
          classificados : [1,2,3,4,5,6,7,8],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [11,12],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'goiano-2016',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',

          semi_classificados : [2,3],
          semi_classificados_alias : 'CLASSIFICADOS (2 MELHORES)',

          rebaixados : [4,5],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'baiano-2017',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [10,11],
          rebaixados_alias : 'REBAIXAMENTO'
      },
      {
          campeonato    : 'baiano-2016',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [5,6],
          rebaixados_alias : 'DISPUTA DO REBAIXAMENTO'
      },
      {
          campeonato    : 'catarinense-2017',
          classificados : [1],
          classificados_alias : 'FINALISTA'
      },
      {
          campeonato    : 'catarinense-2016',
          classificados : [1],
          classificados_alias : 'FINALISTA'
      },
      {
          campeonato    : 'eliminatorias-america-do-sul-2018',
          classificados : [1,2,3,4],
          classificados_alias : 'CLASSIFICADOS PARA COPA DO MUNDO 2018',
          rebaixados : [5],
          rebaixados_alias : 'REPESCAGEM'
      },
      {
          campeonato    : 'primeira-liga-2017',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS PARA AS QUARTAS DE FINAL'
      },
      {
          campeonato    : 'primeira-liga-2016',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS SEMIFINAIS',

          semi_classificados : [2],
          semi_classificados_alias : 'CLASSIFICADO SEMIFINAIS (ÍNDICE TÉCNICO)'
      },
      {
          campeonato    : 'uefa-europa-league-2015-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'uefa-europa-league-2016-2017',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'uefa-champions-league-2015-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [3],
          rebaixados_alias : 'LIGA EUROPA'
      },
      {
          campeonato    : 'uefa-champions-league-2016-2017',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [3],
          rebaixados_alias : 'LIGA EUROPA'
      },
      {
          campeonato    : 'uefa-champions-league-2017-2018',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS',
          rebaixados : [3],
          rebaixados_alias : 'LIGA EUROPA'
      },
      {
          campeonato    : 'copa-america-centenario-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'eurocopa-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS',
          semi_classificados : [3],
          semi_classificados_alias : 'CLASSIFICADOS (4 MELHORES)'
      },
      {
          campeonato    : 'eliminatorias-da-concacaf-2018',
          classificados_A : [1,2],
          classificados_alias_A : 'CLASSIFICADOS PARA PRÓXIMA FASE',

          classificados_D : [1,2,3],
          classificados_alias_D : 'CLASSIFICADOS PARA COPA DO MUNDO 2018',

          semi_classificados_D : [4],
          semi_classificados_alias_D : 'CLASSIFICADO PARA REPESCAGEM'
      },
      {
          campeonato    : 'eliminatorias-africanas-2018',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'eliminatorias-da-oceania-2018',
          classificados_fase_1 : [1],
          classificados_fase_1_alias : 'CLASSIFICADO PARA SEGUNDA FASE',

          classificados_fase_2 : [1, 2],
          classificados_fase_2_alias : 'CLASSIFICADOS PARA FASE FINAL E TERCEIRA FASE',

          classificados_fase_3 : [1],
          classificados_fase_3_alias : 'CLASSIFICADO PARA DISPUTA DA VAGA PARA REPESCAGEM'
      },
      {
          campeonato    : 'copa-paulista-2016',

          classificados_fase_1 : [1,2,3,4],
          classificados_fase_1_alias : 'CLASSIFICADOS PARA SEGUNDA FASE',

          classificados_fase_2 : [1,2],
          classificados_fase_2_alias: 'CLASSIFICADOS PARA AS QUARTAS DE FINAL'
      },
      {
          campeonato    : 'torneio-olimpico-feminino-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS',

          semi_classificados : [3],
          semi_classificados_alias : 'CLASSIFICADOS (2 MELHORES)'
      },
      {
          campeonato    : 'torneio-olimpico-masculino-2016',
          classificados : [1,2],
          classificados_alias : 'CLASSIFICADOS'
      },
      {
          campeonato    : 'eliminatorias-europa-2018',
          classificados : [1],
          classificados_alias : 'CLASSIFICADOS',

          semi_classificados : [2],
          semi_classificados_alias : 'REPESCAGEM'
      },
      {
          campeonato: 'eliminatorias-asiaticas-2018',
          classificados_A: [1,2],
          classificados_alias_A : 'CLASSIFICADOS PARA PRÓXIMA FASE',

          classificados_I : [1,2],
          classificados_alias_I : 'CLASSIFICADOS PARA COPA DO MUNDO 2018',

          semi_classificados_I : [3],
          semi_classificados_alias_I : 'CLASSIFICADO PARA DISPUTA DA VAGA PARA REPESCAGEM'
      }
    ]
 }

  public getLegenda(slug){
    var legendas = this.dadosLegenda;
    if (slug) {
      for (var i in legendas) {
          if (legendas[i].campeonato == slug) {
              return legendas[i];
          }
      }
    } else {
      return legendas;
    }
  }

}