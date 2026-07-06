// Datos extraídos de la Tesis Doctoral de Diego Cisneros Herrera
// Fuente primaria: Informes de Desempeño OSITRAN (hasta 2022)
// Datos de gráficos: aproximaciones basadas en descripciones cualitativas de la tesis

const CONCESIONES = {
  'red-vial-5': {
    id: 'red-vial-5',
    nombre: 'Red Vial N°5',
    subtitulo: 'Ancón – Huacho – Pativilca',
    tipo: 'Autosostenible',
    region: 'Costa Norte',
    fechaBuenaPro: '24/05/2002',
    fechaSuscripcion: '15/01/2003',
    inicioConcesion: '15/01/2003',
    inicioExplotacion: '15/01/2003',
    plazo: 25,
    km: 183,
    peajes: 3,
    inversionInicial: 61,
    inversionAumento2022: 80,
    factorCompetencia: 'Retribución al Estado (5.5% de los ingresos de peaje)',
    factorRetribucion: 'Peaje',
    numAdendas: 5,
    adendas: [
      { n: 1, fecha: '08/11/2004', motivo: 'Modificaciones a cláusulas de definiciones, plazo, régimen de bienes, obras de construcción y explotación. Ampliación de 180 días a 2 años del plazo para entrega de predios de la primera etapa.' },
      { n: 2, fecha: '31/10/2005', motivo: 'Modificaciones a cláusulas de retribución, régimen económico y relaciones con terceros.' },
      { n: 3, fecha: '13/06/2008', motivo: 'Inclusión de la cláusula 6.21 sobre obras complementarias o nuevas vinculadas a mejorar el tránsito.' },
      { n: 4, fecha: '23/12/2015', motivo: 'Modificación del diseño de obras contempladas en el EDI por dificultad de liberar el área de la concesión.' },
      { n: 5, fecha: '29/12/2017', motivo: 'Modificación del monto máximo para ejecución de mayores inversiones y viabilización de aceptación parcial de obras de la Segunda Etapa.' }
    ],
    analisis: 'Concesión muy destacada con inversión realizada muy superior a la comprometida en 2022, situación que solo ocurre en otras dos concesiones (IIRSA Sur T4 e IIRSA Sur T1). Presenta tres periodos de crecimiento de inversión: 2004-2007 (primera etapa), 2013-2016 (segunda etapa) y 2018-2019 (tercera etapa). Llegó al 100% de avance en 2020, año 17 de la concesión. La evolución del tráfico tuvo crecimiento considerable desde el inicio. En 2017, a pesar de estar en el norte del país, no fue afectada por el Fenómeno de El Niño. El año 2020 registró una reducción del -13.5%, con una recuperación del +34% en 2021, el crecimiento más alto registrado.',
    inv: {
      years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [3,   16,  40,  62,  80,  80,  81,  82,  83,  84,  90,  98, 108, 118, 120, 128, 133, 133, 135, 138]
    },
    imd: {
      years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [5200,7000,9500,12000,15500,17000,18000,19200,20500,21800,23500,25200,27000,28800,29200,30500,31500,27202,36451,34000]
    }
  },

  'iirsa-norte': {
    id: 'iirsa-norte',
    nombre: 'IIRSA Norte',
    subtitulo: 'Paita – Yurimaguas',
    tipo: 'Cofinanciado',
    region: 'Norte / Oriente',
    fechaBuenaPro: '05/05/2005',
    fechaSuscripcion: '17/06/2005',
    inicioConcesion: '12/04/2006',
    inicioExplotacion: '12/04/2006',
    plazo: 25,
    km: 1041,
    peajes: 10,
    inversionInicial: 218,
    inversionAumento2022: 423,
    factorCompetencia: 'Menor valor de la suma del PAO más PAMO',
    factorRetribucion: 'PAMO, PAO y Peaje',
    numAdendas: 7,
    adendas: [
      { n: 1, fecha: '28/12/2005', motivo: 'Adecuación operativa del contrato para facilitar la implementación de las prestaciones.' },
      { n: 2, fecha: '23/02/2006', motivo: 'Adelanto de obras de los tramos Dv. Olmos-Piura y Piura-Paita a la Primera Etapa.' },
      { n: 3, fecha: '21/07/2006', motivo: 'Bancabilidad del proyecto: emisión de 30 Certificados de Reconocimiento de Derechos sobre el PAO (CRPAO).' },
      { n: 4, fecha: '14/04/2009', motivo: 'Redefinición del plazo para emisión de laudo arbitral en arbitraje de derecho local.' },
      { n: 5, fecha: '03/05/2009', motivo: 'Modificación de cláusula 6.39: USD 53.5M adicionales para obras adicionales y pago mensual de obras accesorias.' },
      { n: 6, fecha: '25/11/2014', motivo: 'Ampliación del monto para obras adicionales en USD 26.8M adicionales.' },
      { n: 7, fecha: '03/07/2015', motivo: 'Ampliación del monto para obras adicionales en USD 80.6M adicionales.' }
    ],
    analisis: 'La evolución de la inversión realizada presenta un crecimiento constante hasta 2016. Desde ese año se mantuvo prácticamente constante hasta 2022, cuando registró un aumento leve, sobrepasando el 90%. Este lento ritmo de implementación contrasta con otras concesiones como la IIRSA Sur T1. En cuanto al tráfico, creció considerablemente hasta 2016, año en que se llegó al máximo (con la estación MOCCE operativa). Desde entonces hasta 2020 se registró un descenso importante. La cantidad de adendas es considerable, concentradas en los primeros 10 años, siendo los 5 primeros los más críticos.',
    inv: {
      years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [4,   12,  22,  33,  44,  55,  64,  72,  79,  85,  89,  90,  90,  90,  90,  90,  92]
    },
    imd: {
      years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [2000,3200,4500,6000,7500,9000,10500,12000,13500,15800,16200,14000,12000,10000,8000,11000,12500]
    }
  },

  'iirsa-sur-t2': {
    id: 'iirsa-sur-t2',
    nombre: 'IIRSA Sur T2',
    subtitulo: 'Urcos – Inambari',
    tipo: 'Cofinanciado',
    region: 'Sur / Oriente',
    fechaBuenaPro: '23/06/2005',
    fechaSuscripcion: '04/08/2005',
    inicioConcesion: '30/04/2006',
    inicioExplotacion: 'No iniciada',
    plazo: 25,
    km: 300,
    peajes: 1,
    inversionInicial: 213,
    inversionAumento2022: 492,
    factorCompetencia: 'Menor valor de PAMO',
    factorRetribucion: 'PAMO y PAO',
    numAdendas: 8,
    adendas: [
      { n: 1, fecha: '24/02/2006', motivo: 'Aceptación parcial de obras por no entrega saneada de terrenos de peajes Pichirhua y Pampamarca. Modificación de procedimientos de mantenimiento.' },
      { n: 2, fecha: '16/06/2006', motivo: 'Precisiones sobre tipo de vehículo para medición de nivel de servicio. Modificación del procedimiento de pago anual de obras PAO.' },
      { n: 3, fecha: '26/07/2006', motivo: 'Modificaciones relacionadas con la bancabilidad del proyecto. Incluye modificación en 35 cláusulas.' },
      { n: 4, fecha: '16/07/2007', motivo: 'Precisiones respecto a disposiciones para las soluciones técnicas.' },
      { n: 5, fecha: '18/02/2009', motivo: 'Modificaciones referidas al cierre de avances de obra con el PAO Contractual.' },
      { n: 6, fecha: '31/07/2009', motivo: 'Continuidad de la ejecución de obras pendientes al término del periodo transitorio.' },
      { n: 7, fecha: '08/07/2010', motivo: 'Modificación para incrementar el monto máximo del Periodo Final.' },
      { n: 8, fecha: '27/12/2010', motivo: 'Inicio anticipado de la explotación de las obras del Tramo 2.' }
    ],
    analisis: 'Esta concesión presenta la anomalía más grave del sistema: la etapa de explotación no ha comenzado por falta de entregas de terrenos para la segunda caseta de peaje. Desde 2013, la caseta Quincemil solo controla el tráfico sin realizar cobros. A pesar de ser un fracaso en términos de plazos (la buena pro fue en 2005, hace más de 18 años), presenta utilidad neta positiva desde 2013 al ser cofinanciada: el Estado paga el PAMO y PAO independientemente del inicio de explotación. El IMD es aproximadamente 10 veces menor que el del Tramo 1, evidenciando el bajo atractivo de tráfico del corredor.',
    inv: {
      years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [8,   22,  40,  58,  72,  82,  86,  88,  90,  92,  94,  96,  97,  98,  99,  99, 100]
    },
    imd: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [180, 230, 290, 360, 440, 520, 610, 680, 750, 820, 630, 870, 800]
    }
  },

  'iirsa-sur-t3': {
    id: 'iirsa-sur-t3',
    nombre: 'IIRSA Sur T3',
    subtitulo: 'Inambari – Iñapari',
    tipo: 'Cofinanciado',
    region: 'Sur / Oriente',
    fechaBuenaPro: '23/06/2005',
    fechaSuscripcion: '04/08/2005',
    inicioConcesion: '04/08/2005',
    inicioExplotacion: '30/03/2012',
    plazo: 25,
    km: 403,
    peajes: 3,
    inversionInicial: 294,
    inversionAumento2022: 393,
    factorCompetencia: 'Menor valor de PAMO',
    factorRetribucion: 'PAMO, PAO y Peaje',
    numAdendas: 7,
    adendas: [
      { n: 1, fecha: '24/02/2006', motivo: 'Aspectos de trabajos de transitabilidad y avances en estudios de ingeniería, impacto ambiental y actividades preparatorias.' },
      { n: 2, fecha: '16/06/2006', motivo: 'Precisión de alcances sobre tipo de vehículo para medición de nivel de servicio de transitabilidad.' },
      { n: 3, fecha: '26/07/2006', motivo: 'Modificación de definición de Acreedores Permitidos. Incorporación de definiciones sobre CAO, CRPAO, PAO, Titulares de los CRPAO.' },
      { n: 4, fecha: '16/07/2007', motivo: 'Precisiones respecto al mecanismo de reconocimiento y compensación de diferencias en metrados del EDI.' },
      { n: 5, fecha: '30/07/2009', motivo: 'Continuidad de las obras hasta su culminación, inversión por encima del PAO contractual.' },
      { n: 6, fecha: '15/06/2010', motivo: 'Modificación de cláusulas referidas a obras a ejecutar en el periodo final y monto de inversión de obras adicionales.' },
      { n: 7, fecha: '09/12/2010', motivo: 'Inicio anticipado de la explotación de las obras del Tramo 3.' }
    ],
    analisis: 'El mayor avance de inversión se dio en los primeros 6 años (hasta 2011). En 2012, al superar el 80% de inversión comprometida, comenzó la explotación (7 años después de la suscripción por falta de entrega de terrenos). En 2022 la inversión llegó a más del 90%. El tráfico tuvo trayectoria creciente hasta 2018, fue afectado por la cuarentena en 2020 (-10%), registró un extraordinario incremento de +60% en 2021 (el mayor hasta la fecha) y una caída de -11% en 2022. El IMD es superior al T2 pero inferior al T1. Al ser cofinanciada, el Estado debe pagar periódicamente un tráfico muy bajo comparado con concesiones autosostenibles.',
    inv: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [4,   12,  24,  38,  52,  65,  76,  82,  85,  87,  88,  89,  90,  90,  91,  91,  92,  93]
    },
    imd: {
      years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [500, 700, 950, 1300, 1700, 2100, 2400, 2300, 2070, 3312, 2947]
    }
  },

  'iirsa-sur-t4': {
    id: 'iirsa-sur-t4',
    nombre: 'IIRSA Sur T4',
    subtitulo: 'Inambari – Azángaro',
    tipo: 'Cofinanciado',
    region: 'Sur',
    fechaBuenaPro: '23/06/2005',
    fechaSuscripcion: '04/08/2005',
    inicioConcesion: '04/08/2005',
    inicioExplotacion: '01/10/2011',
    plazo: 25,
    km: 306,
    peajes: 3,
    inversionInicial: 198,
    inversionAumento2022: 466,
    factorCompetencia: 'Menor valor presente de la suma del PAO (PPO) y PAMO',
    factorRetribucion: 'PAMO y PAO',
    numAdendas: 7,
    adendas: [
      { n: 1, fecha: '01/03/2006', motivo: 'Adelantar el inicio de los trabajos para mantener la transitabilidad.' },
      { n: 2, fecha: '16/05/2006', motivo: 'Precisiones sobre tipo de vehículo para medición del nivel de servicio de transitabilidad.' },
      { n: 3, fecha: '26/07/2006', motivo: 'Modificaciones que garanticen la bancabilidad del proyecto.' },
      { n: 4, fecha: '18/02/2009', motivo: 'Modificar el plazo para emisión del laudo arbitral en arbitraje de derecho local para Controversias No Técnicas.' },
      { n: 5, fecha: '19/05/2009', motivo: 'Establecer el mecanismo para continuidad de obras, al haber superado el 10% del PAO contractual.' },
      { n: 6, fecha: '06/08/2009', motivo: 'Atención de las condiciones y situación subyacente al agotamiento de la inversión vinculada al PAO contractual.' },
      { n: 7, fecha: '04/03/2011', motivo: 'Inicio anticipado de la explotación de las obras del Tramo 4.' }
    ],
    analisis: 'Es la concesión cofinanciada con mayor porcentaje de inversión respecto a la comprometida, superando el 100%. En el inicio de la explotación (2010) el avance era del 60%, alcanzando el 100% cinco años después (2015), tomando 10 años desde el inicio completarla. El tráfico siguió una trayectoria creciente lenta hasta 2015, con un crecimiento sorprendente en 2016 y 2017. En 2020 fue afectada por la cuarentena (-5.5%) y registró un incremento del +45% en 2021. Desde 2016, el T4 supera al T2 y T3 en tráfico. A pesar de ello, la inversión comprometida actual de ~$664M y el bajo tráfico comparado con concesiones autosostenibles hacen cuestionable la relación costo-beneficio para el Estado.',
    inv: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   14,  26,  38,  50,  60,  72,  84,  92,  98, 100, 108, 115, 120, 125, 128, 132, 136]
    },
    imd: {
      years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [250, 380, 500, 650, 820, 1900, 2800, 3000, 3100, 2930, 4249, 3900]
    }
  },

  'red-vial-6': {
    id: 'red-vial-6',
    nombre: 'Red Vial N°6',
    subtitulo: 'Pucusana – Cerro Azul – Ica',
    tipo: 'Autosostenible',
    region: 'Costa Sur',
    fechaBuenaPro: '20/07/2005',
    fechaSuscripcion: '20/09/2005',
    inicioConcesion: '20/09/2005',
    inicioExplotacion: '20/09/2005',
    plazo: 30,
    km: 222,
    peajes: 3,
    inversionInicial: 228,
    inversionAumento2022: 30,
    factorCompetencia: 'Retribución al Estado',
    factorRetribucion: 'Peaje',
    numAdendas: 9,
    adendas: [
      { n: 1, fecha: '28/08/2007', motivo: 'Modificación de definiciones de obras complementarias y nuevas, y de las unidades de peaje.' },
      { n: 2, fecha: '08/04/2009', motivo: 'Condiciones para modificación del cronograma contractual de obras y actualización de plazos de entrega de predios.' },
      { n: 3, fecha: '16/03/2010', motivo: 'Modificación de cláusulas relacionadas a obras complementarias y nuevas.' },
      { n: 4, fecha: '15/06/2011', motivo: 'Adelantar el inicio de la ejecución de las obras.' },
      { n: 5, fecha: '13/08/2012', motivo: 'Sustitución de Obra de Revegetación por construcción de Intercambio Vial Asia y Puente Peatonal Asia.' },
      { n: 6, fecha: '30/01/2015', motivo: 'Adelantar inicio de obras de Segunda Etapa, condiciones para Tercera Etapa e implementar Laudo Arbitral.' },
      { n: 7, fecha: '20/07/2016', motivo: 'Encargo de estudios y ejecución de Obras Nuevas y labores de Mantenimiento Periódico del Subtramo 5.' },
      { n: 8, fecha: '01/12/2016', motivo: 'Permitir financiamiento a través del mercado de capitales y actualización de definición de Acreedores Permitidos.' },
      { n: 9, fecha: '01/12/2016', motivo: 'Sustitución de inversiones del Intercambio Vial de Tambo de Mora por Paso a Desnivel y precisiones sobre caducidad del contrato.' }
    ],
    analisis: 'Esta concesión es la que tiene mayor cantidad de adendas de las 16 analizadas (9), sin que ello haya significado una mejora en el rendimiento financiero para los inversores. Dividida en 2 etapas, la inversión creció significativamente en 2008-2010, se mantuvo estable hasta 2018 (cuando avanzó la segunda etapa), alcanzando cerca del 100% en 2022. El tráfico siguió la trayectoria teórica esperada: crecimiento anual del 7.3% desde 2007 hasta 2019 (12 años consecutivos). El año 2020 registró una reducción del -16% por la pandemia. No se elaboró adenda en 2017 por el Fenómeno de El Niño pese a estar en el norte, ya que no sufrió consecuencias importantes en su infraestructura.',
    inv: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   14,  25,  52,  70,  78,  79,  80,  80,  80,  81,  82,  83,  92,  98, 102, 105, 108]
    },
    imd: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [13000,14400,16000,17170,18430,19780,21220,22770,24430,26210,28120,30150,32300,34650,37170,31220,34000,37500]
    }
  },

  'empalme-1b': {
    id: 'empalme-1b',
    nombre: 'Empalme 1B',
    subtitulo: 'Buenos Aires – Canchaque – Mocupe',
    tipo: 'Cofinanciado',
    region: 'Norte',
    fechaBuenaPro: '31/10/2006',
    fechaSuscripcion: '09/02/2007',
    inicioConcesion: '—',
    inicioExplotacion: '01/03/2010',
    plazo: 15,
    km: 77,
    peajes: 1,
    inversionInicial: 31,
    inversionAumento2022: 8,
    factorCompetencia: 'Menor valor presente de la suma del PAO y PAMO',
    factorRetribucion: 'PAMO y PAO con reducción del peaje',
    numAdendas: 3,
    adendas: [
      { n: 1, fecha: '16/01/2008', motivo: 'Mecanismos de financiamiento para ejecución de obras. Modificación de definiciones y procedimientos del Anexo B (contrato financiero).' },
      { n: 2, fecha: '17/08/2009', motivo: 'Modificación del numeral 4.19 del Anexo B, que regula el ajuste del PAO por variación de precios.' },
      { n: 3, fecha: '25/01/2011', motivo: 'Eliminación de la definición de Fideicomiso de Eventos Catastróficos. Modificación de cláusulas sobre Fideicomiso de Administración.' }
    ],
    analisis: 'Una de las tres concesiones más pequeñas en cuanto a infraestructura. Tiene una característica distintiva: el plazo de vigencia del contrato comienza desde el inicio de la explotación (2010), no desde la suscripción (2007) como en otras. En cuanto a la inversión, alcanzó rápidamente el 90% en los primeros 4 años, llegando prácticamente a su punto máximo desde 2011. El IMD siguió una trayectoria creciente con un promedio del 9% anual hasta 2019. En 2020 registró una reducción del -20% y un gran incremento del +54% en 2021. Presenta una cantidad de adendas menor al promedio, todas distribuidas desde la suscripción hasta el primer año de explotación.',
    inv: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [3,   20,  55,  90,  97, 100, 102, 103, 104, 105, 106, 107, 108, 108, 109, 110]
    },
    imd: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [175, 205, 240, 280, 327, 380, 438, 500, 540, 542, 434, 668, 580]
    }
  },

  'iirsa-sur-t1': {
    id: 'iirsa-sur-t1',
    nombre: 'IIRSA Sur T1',
    subtitulo: 'San Juan de Marcona – Urcos',
    tipo: 'Cofinanciado',
    region: 'Sur',
    fechaBuenaPro: '29/08/2007',
    fechaSuscripcion: '23/10/2007',
    inicioConcesion: '23/10/2007',
    inicioExplotacion: '07/12/2007',
    plazo: 25,
    km: 758,
    peajes: 5,
    inversionInicial: 99,
    inversionAumento2022: 46,
    factorCompetencia: 'Menor valor del PAS (suma del PAO y PAMO)',
    factorRetribucion: 'PAMO y PAO (PPO)',
    numAdendas: 2,
    adendas: [
      { n: 1, fecha: '22/10/2010', motivo: 'Modificación de cláusulas sobre aceptación de obras, mecanismo de compensación por mantenimiento periódico y control de avances de obra. Suspensión de obligaciones de construcción.' },
      { n: 2, fecha: '02/06/2011', motivo: 'Precisiones al Contrato de Concesión Numeral 3 del Anexo XIII referido al PAMO.' }
    ],
    analisis: 'El inicio y la explotación comenzaron casi simultáneamente (solo 45 días de diferencia), lo que es casi ideal para una concesión. Gran avance de inversión en los años 3 y 4 (llegando a más del 90%), seguido de incrementos lentos y constantes. Al 2022, la inversión supera la comprometida, lo que indica que hay montos pendientes de reconocimiento por el concedente. El tráfico creció un 9% anual entre 2009 y 2019. En 2020 descendió un -20% y en 2021 tuvo un incremento significativo del +40%. Al ser cofinanciada, no es afectada por la demanda ni por fenómenos naturales. La Adenda N°2 tuvo un fuerte impacto positivo: pasó de utilidad negativa a positiva en 2012.',
    inv: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   20,  60,  92,  96,  98, 100, 101, 103, 105, 107, 109, 111, 112, 113, 115]
    },
    imd: {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [1200,1500,1850,2260,2760,3370,4120,4900,5560,5960,6150,6200,4960,6944,6400]
    }
  },

  'iirsa-sur-t5': {
    id: 'iirsa-sur-t5',
    nombre: 'IIRSA Sur T5',
    subtitulo: 'Matarani – Azángaro – Ilo',
    tipo: 'Cofinanciado',
    region: 'Sur',
    fechaBuenaPro: '29/08/2007',
    fechaSuscripcion: '24/10/2007',
    inicioConcesion: '07/12/2007',
    inicioExplotacion: '07/12/2007',
    plazo: 25,
    km: 855,
    peajes: 8,
    inversionInicial: 185,
    inversionAumento2022: 124,
    factorCompetencia: 'Menor valor presente de la suma del PAO (PPO) y PAMO',
    factorRetribucion: 'PAMO, PAO y Peaje',
    numAdendas: 4,
    adendas: [
      { n: 1, fecha: '26/11/2010', motivo: 'Inclusión del tramo Puente Gallatini-Humajalso y Vía de Evitamiento de Azángaro. Modificación de cláusulas sobre aceptación de obras y mecanismo de compensación por mantenimiento.' },
      { n: 2, fecha: '24/06/2011', motivo: 'Precisiones al PAMO y a la Cuenta de Mantenimiento Periódica del Contrato de Concesión.' },
      { n: 3, fecha: '19/06/2015', motivo: 'Regular la definición, procedimientos y condiciones para la construcción de la Segunda Calzada de la carretera Puno-Juliaca.' },
      { n: 4, fecha: '08/05/2019', motivo: 'Aceptación de la segunda calzada Puno-Juliaca y modificación de cláusulas referidas al plazo de ejecución.' }
    ],
    analisis: 'El inicio y la explotación comenzaron en la misma fecha, ya que parte de la infraestructura estaba construida y lista. Tiene la segunda mayor cantidad de peajes de las 16 concesiones peruanas (8). En cuanto a la inversión: avance importante de 2009 a 2011 (60%), subida hasta 70% en 2017 y crecimiento continuo hasta 90% a fines de 2022. El tráfico siguió trayectoria creciente, con los mejores resultados hasta 2016, afectado en 2020 (-13%) y con recuperación del +32% en 2021. Los IMD son significativamente mayores que los del T2, T3 y T4. Nótese que la Adenda N°3 (2015) permitió la segunda calzada Puno-Juliaca, infraestructura de alto impacto regional.',
    inv: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [3,   18,  38,  52,  60,  62,  63,  65,  67,  70,  72,  78,  83,  87,  89,  92]
    },
    imd: {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [4500,7000,10000,13000,16000,19000,21000,24000,28000,27000,28500,29500,25665,33878,31000]
    }
  },

  'red-vial-4': {
    id: 'red-vial-4',
    nombre: 'Red Vial N°4',
    subtitulo: 'Pativilca – Dv. Salaverry – Trujillo',
    tipo: 'Autosostenible',
    region: 'Costa Norte',
    fechaBuenaPro: '18/12/2008',
    fechaSuscripcion: '18/02/2009',
    inicioConcesion: '18/02/2009',
    inicioExplotacion: '17/03/2009',
    plazo: 25,
    km: 356,
    peajes: 4,
    inversionInicial: 218,
    inversionAumento2022: 68,
    factorCompetencia: 'Ofrecimiento de obras adicionales (el ganador ofreció 113.42 km adicionales y otras 11 obras)',
    factorRetribucion: 'Peaje',
    numAdendas: 4,
    adendas: [
      { n: 1, fecha: '01/09/2015', motivo: 'Modificaciones al EDI aprobado de la segunda calzada por interferencias con servicios públicos y sitios arqueológicos. Rescates arqueológicos a cargo del Concedente.' },
      { n: 2, fecha: '22/07/2016', motivo: 'Establecer procedimiento para la Obra Vial Nueva No Ofertada (Vía de Evitamiento Chimbote). Condiciones para ajuste de tarifa en peajes.' },
      { n: 3, fecha: '03/04/2017', motivo: 'Inclusión de Conservación de Emergencia. Encargo de Estudios Definitivos de ingeniería e instrumentos de Gestión Ambiental al Concesionario.' },
      { n: 4, fecha: '28/10/2019', motivo: 'Modificación de cláusulas sobre Acreedores permitidos, caducidad del contrato y definición de obras de desempate.' }
    ],
    analisis: 'Presenta dos puntos críticos en su tráfico: 2017 (-60%, el descenso más severo de todas las concesiones) y 2020 (-6%). El primero fue producto del Fenómeno de El Niño, que destruyó carreteras y bloqueó el tráfico: colapso de los puentes de Fortaleza (km 213), Sechin (km 376), Huambacho (km 407) y Virú (km 520) entre enero y abril de 2017. Este evento evidencia la vulnerabilidad del sistema concesionario peruano ante fenómenos naturales. La inversión tuvo gran avance de 2011 a 2016, llegando al 90% en 2022 (más de 10 años después del inicio de explotación). Esta concesión se dio bajo el DL N°1012 (2008), que prohibía modificaciones durante los primeros 3 años.',
    inv: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [4,   8,   22,  40,  58,  74,  86,  90,  90,  90,  90,  90,  90,  90]
    },
    imd: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [12000,14000,16500,19000,21000,23500,26000,28000,11200,20000,24000,22560,27000,28000]
    }
  },

  'ovalo-chancay': {
    id: 'ovalo-chancay',
    nombre: 'Óvalo Chancay',
    subtitulo: 'Chancay – Huaral – Acos',
    tipo: 'Cofinanciado',
    region: 'Costa Centro',
    fechaBuenaPro: '07/11/2008',
    fechaSuscripcion: '20/02/2009',
    inicioConcesion: '20/02/2009',
    inicioExplotacion: '23/03/2018',
    plazo: 15,
    km: 77,
    peajes: 1,
    inversionInicial: 42,
    inversionAumento2022: 0,
    factorCompetencia: 'Menor valor presente de la suma del PAO (PPO) y PAMO',
    factorRetribucion: 'PAMO y PPO',
    numAdendas: 2,
    adendas: [
      { n: 1, fecha: '30/04/2010', motivo: 'Precisión de fórmulas para el pago del PAS y modificación del Apéndice II del Anexo II referido a pagos del Concedente en el Fideicomiso de Administración.' },
      { n: 2, fecha: '11/04/2017', motivo: 'Inclusión de párrafo en la cláusula 6.29 para permitir aceptación de obras de construcción. Modificación de cláusula 9.11 para permitir restitución de Niveles de Servicio.' }
    ],
    analisis: 'La buena pro fue en 2008 y la suscripción en 2009, pero recién comenzó la explotación en 2018: 9 años de espera. La Adenda N°2 (2017) fue determinante: permitió que la explotación comenzara antes de cumplir hitos mínimos del contrato, iniciando apenas 11 meses después de su firma. En cuanto a la inversión, tuvo un gran avance en 2011 (75%), alcanzando cerca del 100% desde 2015. Esto la hace destacar positivamente frente a otras concesiones. Sin embargo, el IMD en 2022 está entre 40 y 60 veces más bajo que las concesiones autosostenibles Red Vial N°4, N°5 y N°6, evidenciando la baja demanda del corredor. Al estar bajo el DL N°1012, excepcionalmente sí se produjeron modificaciones antes de los 3 años.',
    inv: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [3,   30,  75,  85,  92,  97, 100, 102, 103, 104, 108, 112, 116, 120]
    },
    imd: {
      years: [2018,2019,2020,2021,2022],
      vals:  [380, 520, 410, 580, 650]
    }
  },

  'costa-sierra': {
    id: 'costa-sierra',
    nombre: 'Tramo Vial Costa-Sierra',
    subtitulo: 'Dv. Quilca – Dv. Matarani – Dv. Moquegua – Ilo',
    tipo: 'Cofinanciado',
    region: 'Sur',
    fechaBuenaPro: '26/01/2009',
    fechaSuscripcion: '30/04/2009',
    inicioConcesion: '20/12/2017',
    inicioExplotacion: '01/11/2019',
    plazo: 15,
    km: 47,
    peajes: 1,
    inversionInicial: 24,
    inversionAumento2022: 0,
    factorCompetencia: 'Menor valor presente de la suma del PPO y PAMO',
    factorRetribucion: 'PAMO y PPO',
    numAdendas: 1,
    adendas: [
      { n: 1, fecha: '18/04/2017', motivo: 'Inclusión de la cláusula 6.29A para el procedimiento de aceptación de obras. Redefinición del procedimiento para emisión del último CAO. Modificación de la cláusula 8.9 referida al inicio de la explotación.' }
    ],
    analisis: 'Presenta la anomalía de plazos más extrema de toda la muestra: la buena pro y la suscripción fueron en 2009, pero la explotación no comenzó hasta 2019 (10 años de espera). Contrasta diametralmente con la Autopista del Sol (buena pro a explotación en solo 3 meses). Sin embargo, en cuanto a inversión destaca positivamente: llegó al 100% en 2012-2013, algo que menos de la mitad de las concesiones analizadas logran. Solo 4 años de datos de IMD (desde 2019), con volúmenes bajos comparables al T2, T3 y T4 de la IIRSA Sur, aunque superiores al T2. La menor cantidad de adendas de toda la muestra (solo 1) puede relacionarse con el largo periodo sin actividad formal.',
    inv: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   30,  65, 100, 105, 106, 107, 108, 108, 109, 110, 112, 114, 116]
    },
    imd: {
      years: [2019,2020,2021,2022],
      vals:  [900, 680, 1350, 1600]
    }
  },

  'autopista-sol': {
    id: 'autopista-sol',
    nombre: 'Autopista del Sol',
    subtitulo: 'Trujillo – Sullana',
    tipo: 'Autosostenible',
    region: 'Costa Norte',
    fechaBuenaPro: '19/06/2009',
    fechaSuscripcion: '25/08/2009',
    inicioConcesion: '25/08/2009',
    inicioExplotacion: '25/09/2009',
    plazo: 25,
    km: 475,
    peajes: 5,
    inversionInicial: 360,
    inversionAumento2022: 133,
    factorCompetencia: 'Ofrecimiento de obras adicionales a las que el Estado exige como mínimo',
    factorRetribucion: 'Peaje',
    numAdendas: 2,
    adendas: [
      { n: 1, fecha: '08/01/2016', motivo: 'Incrementar el porcentaje de Obras Adicionales para viabilizar la ejecución de la "Segunda Calzada de la Vía de Evitamiento de Piura - Panamericana Norte".' },
      { n: 2, fecha: '23/12/2016', motivo: 'Viabilizar la continuación de obras, modificar el régimen tarifario, modificar plazos de entrega de terrenos y posibilitar que el Concesionario efectúe pagos a beneficiarios de terrenos a liberar.' }
    ],
    analisis: 'Modelo de eficiencia en plazos: solo 1 mes entre la buena pro y el inicio de la explotación. No obstante, la expropiación de terrenos ha sido y sigue siendo la principal problemática del proyecto, lo que explica que la inversión no haya llegado al 100% al 2022, con su mayor crecimiento en 2021 (llegando a casi el 90%). El tráfico creció gradualmente desde 2010, con leves descensos en 2017 (-10%) por el Fenómeno de El Niño y 2020 (-11%) por la pandemia. En términos de IMD, supera considerablemente a las concesiones cofinanciadas. La concentración de sus 2 adendas en un solo año (2016), posterior a la explotación, refleja la ausencia de situaciones excepcionales en sus primeros años.',
    inv: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [2,   6,   18,  30,  44,  55,  65,  72,  78,  83,  87,  88,  91,  94]
    },
    imd: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [5000,8000,11000,13500,15500,17500,19000,21000,18900,21500,23500,20915,26000,28000]
    }
  },

  'iirsa-centro': {
    id: 'iirsa-centro',
    nombre: 'IIRSA Centro',
    subtitulo: 'Lima – Huancayo',
    tipo: 'Autosostenible',
    region: 'Centro',
    fechaBuenaPro: '27/07/2010',
    fechaSuscripcion: '27/09/2010',
    inicioConcesion: '27/09/2010',
    inicioExplotacion: '27/09/2010',
    plazo: 25,
    km: 377,
    peajes: 3,
    inversionInicial: 105,
    inversionAumento2022: 49,
    factorCompetencia: 'Ofrecimiento de obras adicionales que el Estado exige como mínimo',
    factorRetribucion: 'Peaje',
    numAdendas: 2,
    adendas: [
      { n: 1, fecha: '01/09/2014', motivo: 'Permitir la aprobación parcial del Estudio Definitivo de Ingeniería (EDI) de las Obras a cargo del Concesionario.' },
      { n: 2, fecha: '12/01/2015', motivo: 'Establecer condiciones para inicio y correcta ejecución de las Obras a cargo del Concesionario y condiciones para la entrada en operación de la nueva unidad de peaje.' }
    ],
    analisis: 'El inicio de la explotación es el mismo día que la suscripción, lo que le da ingresos desde el principio, una ventaja significativa en términos de flujo de caja. El avance de inversión se concentró en los años 5, 6 y 7 de la concesión (2015-2017), siendo el séptimo el más activo. Sin embargo, esta inversión solo llega al 80% en 2022, dejando un porcentaje importante pendiente. Tiene uno de los IMD más altos de todas las concesiones analizadas, superando incluso a concesiones autosostenibles, con un crecimiento del 5% anual hasta 2019, descenso del -20% en 2020 y recuperación del +33% en 2021. Supera considerablemente a las cofinanciadas en términos de tráfico.',
    inv: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   8,   12,  18,  25,  38,  58,  77,  79,  80,  80,  81,  82]
    },
    imd: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [7500,8200,9000,9800,10700,11700,12700,13400,14000,14600,11680,15524,16000]
    }
  },

  'panamericana': {
    id: 'panamericana',
    nombre: 'Tramo Vial Panamericana',
    subtitulo: 'Dv. Quilca – Dv. Matarani – Dv. Ilo – Tacna – La Concordia',
    tipo: 'Autosostenible',
    region: 'Sur',
    fechaBuenaPro: '16/08/2012',
    fechaSuscripcion: '30/01/2013',
    inicioConcesion: '30/01/2013',
    inicioExplotacion: '02/03/2013',
    plazo: 25,
    km: 429,
    peajes: 4,
    inversionInicial: 160,
    inversionAumento2022: -26,
    factorCompetencia: 'Ofrecimiento de obras adicionales que el Estado exige como mínimo',
    factorRetribucion: 'Peaje',
    numAdendas: 2,
    adendas: [
      { n: 1, fecha: '09/05/2016', motivo: 'Precisar la acreditación de Cierre financiero, redefinir condiciones de entrega de áreas de terreno, establecer plazos máximos para obras y redefinir condiciones para incremento tarifario vinculado a ejecución de obras.' },
      { n: 2, fecha: '10/07/2019', motivo: 'Modificar condiciones para extinción y liquidación del Fideicomiso de Recaudación. Estudios para atender deslizamientos en Siguas. Establecer plazos para liberación de terrenos.' }
    ],
    analisis: 'Presenta tres observaciones notables: (1) El tiempo entre inicio del contrato y explotación es de solo 2 meses, eficiente a comparación de la mayoría de cofinanciadas. (2) Es la única concesión de las 16 cuya inversión comprometida se ha REDUCIDO (de $160M a $134M en 2022), fenómeno único en toda la muestra. (3) Tiene garantía de Ingreso Mínimo Anual Garantizado (IMAG), usada solo en 4 concesiones autosostenibles, lo que reduce el riesgo de demanda para inversores. Sin embargo, tiene el peor rendimiento de todas en porcentaje de inversión ejecutada: menos del 30% al 2022, constante en 28% desde 2020. El IMD presenta valores algo mayores que IIRSA Norte, con un crecimiento lento del +4% anual. La Adenda N°2 surgió de un evento de fuerza mayor (deslizamiento en Siguas) que impidió el cierre financiero.',
    inv: {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [4,   8,   14,  20,  24,  27,  28,  28,  28,  28]
    },
    imd: {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [3200,3450,3700,3980,4250,4610,5000,4000,5200,6000]
    }
  },

  'long-sierra-t2': {
    id: 'long-sierra-t2',
    nombre: 'Longitudinal de la Sierra T2',
    subtitulo: 'Ciudad de Dios – Cajamarca – Chiple – Emp. PE-3N',
    tipo: 'Cofinanciado',
    region: 'Norte Sierra',
    fechaBuenaPro: '19/12/2013',
    fechaSuscripcion: '28/05/2014',
    inicioConcesion: '28/05/2014',
    inicioExplotacion: '02/09/2014',
    plazo: 25,
    km: 875,
    peajes: 2,
    inversionInicial: 174,
    inversionAumento2022: 95,
    factorCompetencia: 'Menor valor de la suma del PAMO, PRM y PAMPI',
    factorRetribucion: 'Menor valor presente de la suma del PAMO, PRM y PAMPI',
    numAdendas: 0,
    adendas: [],
    analisis: 'La única concesión de las 16 sin ninguna adenda firmada hasta 2022. El tiempo entre suscripción y explotación fue de solo 4 meses, eficiente para ser cofinanciada. Destaca por dividir su factor de competencia en tres componentes: PAMO (mantenimiento y operación), PRM (rehabilitación y mejoramiento) y PAMPI (mantenimiento periódico inicial), que en otras concesiones se agrupan simplemente como PAMO. La inversión creció constantemente hasta 2018, luego lentamente hasta 83%. El IMD tuvo un crecimiento importante en los primeros años, pero sufrió el descenso más severo en 2017 (-54%) de su historia, seguido de recuperación. En 2020 cayó un -22% y en 2021 se recuperó hasta niveles de 2019. Presenta un IMD notable para ser cofinanciada. Es la concesión más reciente de las 16 analizadas.',
    inv: {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022],
      pct:   [5,   22,  45,  62,  75,  78,  80,  82,  83]
    },
    imd: {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022],
      vals:  [2000,3500,5800,2668,4000,5200,4056,5200,5500]
    }
  }
};

// Lista ordenada de concesiones (cronológica por suscripción)
const LISTA_CONCESIONES = [
  'red-vial-5', 'iirsa-norte', 'iirsa-sur-t2', 'iirsa-sur-t3', 'iirsa-sur-t4',
  'red-vial-6', 'empalme-1b', 'iirsa-sur-t1', 'iirsa-sur-t5', 'red-vial-4',
  'ovalo-chancay', 'costa-sierra', 'autopista-sol', 'iirsa-centro',
  'panamericana', 'long-sierra-t2'
];

// Colores por tipo
const COLORES = {
  Autosostenible: { badge: '#1a7a4a', light: '#e8f5ee', text: '#0f4e2e' },
  Cofinanciado:   { badge: '#c85a1a', light: '#fdf0e8', text: '#7a3210' }
};

// Stats globales
const STATS = {
  totalConcesiones: 16,
  totalKm: Object.values(CONCESIONES).reduce((s, c) => s + c.km, 0),
  inversionTotalInicial: Object.values(CONCESIONES).reduce((s, c) => s + c.inversionInicial, 0),
  promedioAdendas: (Object.values(CONCESIONES).reduce((s, c) => s + c.numAdendas, 0) / 16).toFixed(1),
  autosostenibles: Object.values(CONCESIONES).filter(c => c.tipo === 'Autosostenible').length,
  cofinanciadas: Object.values(CONCESIONES).filter(c => c.tipo === 'Cofinanciado').length
};
