const a = '';

// import React, { useEffect, useState } from 'react';
// import { Grid, Row } from 'react-flexbox-grid';
// import { Separator } from '../atomic/atm.separator/separator.styled';
// import { Body, H2, H3, H4 } from '../components/typography';
// import { Tag } from '../atomic/atm.tag';
// import { BoxStyled } from '../atomic/atm.box/box.styled';
// import { MoreButton } from '../atomic/atm.more-button';
// import { Hbox } from '../atomic/atm.box/hbox.styled';
// import { UlStyled, LiStyled } from '../atomic/atm.list/list.styled';
// import { useRequest } from '../hooks/useRequest.hook';
// import { VaccinesBoxStyled } from '../components/vaccine-display.styled';
// import { VaccineDisplay } from '../components/vaccine-display';
// import { formatDayAndMonthToHuman } from '../utils/format-date';
// import { ColorTagStyled } from '../atomic/atm.colortag/colortag.styled';
// import { useParams } from 'react-router-dom';
// import { Chart as ChartJS } from 'chart.js/auto';
// import { Chart } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';
// import { Color } from '../components/constants';
// import { Select } from '../atomic/atm.select';
// import { Input } from '../atomic/atm.input';
// import { Button } from '../atomic/atm.button';

// export const Cattle = () => {
//   const params = useParams();

//   const { data, request: getCattle } = useRequest({
//     route: `cabeca/${params?.id}/view`,
//   });

//   useEffect(() => {
//     getCattle({ params: {}, withCredentials: true });
//   }, [getCattle]);

//   const gestationTime = Math.floor(data?.tempo_crias / 30.4);


//   const weights = data?.pesos
//     ?.replaceAll(' ', '')
//     ?.split(';')
//     ?.map(weight => {
//       return {
//         weight: weight.split(',')[1],
//         date: weight.split(',')[0],
//       };
//     });

//   const months = [
//     { title: '0 meses', value: 0 },
//     { title: '1 mês', value: 1 },
//     { title: '2 meses', value: 2 },
//     { title: '3 meses', value: 3 },
//     { title: '4 meses', value: 4 },
//     { title: '5 meses', value: 5 },
//     { title: '6 meses', value: 6 },
//     { title: '7 meses', value: 7 },
//     { title: '8 meses', value: 8 },
//     { title: '9 meses', value: 9 },
//     { title: '10 meses', value: 10 },
//     { title: '11 meses', value: 11 },
//     { title: '12 meses', value: 12 },
//   ];

//   const getMonthsProjection = (
//     previousMonths,
//     previousWeights,
//     monthsProjection,
//     gmd,
//   ) => {
//     const lastWeight = previousWeights[previousWeights.length - 1];

//     const lastDate = previousMonths[previousMonths.length - 1];

//     const [lastDay, lastMonth, lastYear] = lastDate.split('/');

//     const monthsToProject = [...Array(Number(monthsProjection))].map(
//       (x, index) => index + 1,
//     );

//     const projectedWeights = monthsToProject.map(month => {
//       return Number(lastWeight) + gmd * 30.4 * month;
//     });

//     const newDates = monthsToProject.map(month => {
//       const d = new Date(lastYear, lastMonth - 1, lastDay);

//       const newDate = new Date(d.setMonth(d.getMonth() + month));
//       const isoDate = newDate.toISOString().split('T')[0];

//       const graphFormat = isoDate.split('-').reverse().join('/');

//       return graphFormat;
//     });

//     let projection = [];

//     for (let item in newDates) {
//       projection.push({
//         date: newDates[item],
//         weight: projectedWeights[item],
//       });
//     }

//     return projection;
//   };

//   let dates = weights?.map(weight => weight.date);
//   const weightsArray = weights?.map(weight => weight.weight);

//   let chartKey = 1;

//   const [chartLabels, setChartLabels] = useState(dates);
//   const [chartWeightProjection, setChartWeightProjection] =
//     useState(weightsArray);

//   useEffect(() => {
//     if (weightsArray?.length) {
//       setChartWeightProjection(weightsArray);
//     }
//   }, [data?.pesos]);

//   const onClickApply = e => {
//     e.preventDefault();

//     const monthsSelect = document?.querySelector('#monthsProjection')?.value;
//     const gmd = document?.querySelector('#gmd')?.value;

//     const projections = getMonthsProjection(
//       weights.map(weight => weight.date),
//       weightsArray,
//       monthsSelect,
//       gmd,
//     );

//     dates = [...dates, ...projections.map(projection => projection.date)];
//     const projectedWeights = [
//       ...weightsArray,
//       ...projections.map(projection => projection.weight),
//     ];

//     setChartLabels(dates);

//     setChartWeightProjection(projectedWeights);

//     chartKey++;
//   };

//   const chartData = {
//     labels: chartLabels || weights?.map(weight => weight.date),
//     datasets: [
//       {
//         label: 'Pesos (kg)',
//         fill: true,
//         lineTension: 0.3,
//         borderColor: Color.Primary,
//         backgroundColor: Color.Primary + '33',
//         borderCapStyle: 'butt',
//         pointBorderColor: Color.Primary,
//         pointBackgroundColor: Color.Primary,
//         borderWidth: 1,
//         borderRadius: 4,
//         pointHitRadius: 10,
//         data: weightsArray,
//       },
//       {
//         label: 'Projeção',
//         fill: false,
//         lineTension: 0.3,
//         borderColor: 'pink',
//         backgroundColor: 'pink' + '33',
//         borderCapStyle: 'butt',
//         pointBorderColor: 'pink',
//         pointBackgroundColor: 'pink',
//         borderWidth: 1,
//         borderRadius: 4,
//         pointHitRadius: 10,
//         data: chartWeightProjection,
//       },
//     ],
//   };

//   return (
//     <Grid>
//       <Separator type="Small" />
//       <Row>
//         <Hbox>
//           <Hbox.Item>
//             <BoxStyled vAlign="center">
//               <H2>#{data?.n_etiqueta}</H2> <Separator type="XNano" />
//               <Tag>{data?.tipo}</Tag>
//               <Separator type="XNano" />
//               <ColorTagStyled
//                 color={data?.brinco?.cor_HEX}
//                 width="50px"
//                 height="25px"
//               />
//             </BoxStyled>
//             <Separator type="XNano" />
//           </Hbox.Item>

//           <Hbox.Item>
//             <BoxStyled hAlign="flex-end" vAlign="flex-end">
//               <MoreButton />
//             </BoxStyled>
//           </Hbox.Item>
//         </Hbox>
//       </Row>

//       <Separator type="Medium" />

//       <H3>Evolução de pesos</H3>
//       <Separator type="XNano" />
//       <H4>Projeção</H4>
//       <form onSubmit={onClickApply}>
//         <Separator type="Nano" />
//         <BoxStyled vAlign="flex-end">
//           <Select
//             name="monthsProjection"
//             id="monthsProjection"
//             label="meses"
//             options={months}
//           />
//           <Separator type="Nano" />
//           <div>
//             <Input
//               name="gmd"
//               id="gmd"
//               type="number"
//               label="gmd (kg)"
//               step="0.01"
//             />
//           </div>
//           <Separator type="Nano" />
//           <Button>Aplicar</Button>
//         </BoxStyled>
//       </form>

//       <Line data={chartData} key={chartKey} />

//       <Separator type="Medium" />

//       <H3>Informações</H3>
//       <Separator type="XNano" />

//       <UlStyled>
//         <LiStyled>
//           Data de nascimento: {formatDayAndMonthToHuman(data?.nascimento)}
//         </LiStyled>
//         <LiStyled>Estado: {data?.esta_vivo ? 'vivo' : 'morto'} </LiStyled>
//         <LiStyled>Sexo: {data?.sexo}</LiStyled>
//         <LiStyled>Peso: {data?.ultimo_peso} arrobas</LiStyled>
//         <LiStyled>Vendido: {data?.vendido ? 'sim' : 'não'}</LiStyled>
//       </UlStyled>

//       <Separator type="XNano" />

//       <Body bold>
//         O intervalo médio entre gestações é de {gestationTime}{' '}
//         {gestationTime === 1 ? 'mês' : 'meses'}
//       </Body>

//       <Separator type="Medium" />

//       <H3>Observações</H3>
//       <Separator type="XNano" />
//       <Body bold>{data?.observacoes} </Body>

//       <Separator type="Medium" />
//       <H3>Vacinas</H3>
//       <Separator type="XNano" />
//       <VaccinesBoxStyled>
//         <VaccineDisplay checked={data?.febre_aftosa} title={'Febre Aftosa'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.brucelose} title={'Brucelose'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.clostridioses} title={'Clostridioses'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.botulismo} title={'Botulismo'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.leptospirose} title={'Leptospirose'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.raiva} title={'Raiva'} />
//         <Separator type="XNano" />

//         <VaccineDisplay checked={data?.ibr_bvd} title={'IBR-BVD'} />
//         <Separator type="XNano" />
//       </VaccinesBoxStyled>
//       <Separator type="Medium" />
//     </Grid>
//   );
// };
