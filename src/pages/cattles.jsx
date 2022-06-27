const b = '';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import { Frame } from '../atomic/atm.frame/frame';
// import { Separator } from '../atomic/atm.separator/separator.styled';

// import { H2, H3, H5 } from '../components/typography';
// import { Hbox } from '../atomic/atm.box/hbox.styled';
// import { Button } from '../atomic/atm.button';
// import { Select } from '../atomic/atm.select';
// import { Checkbox } from '../atomic/atm.checkbox';

// import { RoundButton } from '../atomic/atm.roundbutton';

// import { useEffect } from 'react';
// import { LinkStyled } from '../atomic/atm.link/link.styled';
// import { useRequest } from '../hooks/useRequest.hook';
// import { faIcon } from '../atomic/atm.font-awesome';
// import { IconStyled } from '../components/icon.styled';
// import { BoxStyled } from '../atomic/atm.box/box.styled';

// export const Cattles = () => {
//   const selectEstado = [
//     { title: 'Ativos', value: 'ativos' },
//     { title: 'Vendido', value: 'vendidos' },
//     { title: 'Mortos', value: 'mortos' },
//   ];

//   const selectOrder = [
//     { title: 'Mais novo', value: 'maisnovo' },
//     { title: 'Mais velho', value: 'maisvelho' },
//     { title: 'Nº crescente', value: 'cresente' },
//     { title: 'Nº decrescente', value: 'decrescente' },
//   ];

//   const { data, request } = useRequest({ route: '/cabeca/list' });
//   const { data: tagColors, request: getTagColors } = useRequest({
//     route: '/brincos/get',
//   });

//   useEffect(() => {
//     request({
//       params: {
//         boi_checked: 1,
//         cria_checked: 1,
//         matriz_checked: 1,
//         cor: 'all',
//         categoria: 'ativos',
//         order_by: 'maisnovo',
//       },
//       withCredentials: true,
//     });
//   }, [request]);

//   const cattles = data?.Cabecas;

//   const onSubmit = e => {
//     e?.preventDefault();
//     const state = document?.querySelector('#state')?.value;
//     const orderBy = document?.querySelector('#orderBy')?.value;
//     const color = document?.querySelector('#color')?.value;
//     const bulls = document?.querySelector('#bulls')?.value;
//     const cows = document?.querySelector('#cows')?.value;
//     const calfs = document?.querySelector('#calfs')?.value;

//     const params = {
//       route: '/cabeca/list',
//       params: {
//         boi_checked: bulls === 'true' ? 1 : 0,
//         cria_checked: calfs === 'true' ? 1 : 0,
//         matriz_checked: cows === 'true' ? 1 : 0,
//         cor: color,
//         categoria: state,
//         order_by: orderBy,
//       },
//     };

//     request(params);
//   };

//   useEffect(() => {
//     getTagColors({ params: null, withCredentials: true });
//   }, [getTagColors]);

//   const selectColors = tagColors?.map(item => {
//     return { title: item?.fields?.cor_nome, value: item?.pk };
//   });

//   return (
//     <>
//       <Grid>
//         <Separator type="Small" />
//         <form onSubmit={onSubmit}>
//           <Row>
//             <Col xs={12}></Col>
//           </Row>
//           <Hbox>
//             <Hbox.Item noGrow vAlign="center">
//               <H2>Cabeças de gado</H2>
//             </Hbox.Item>

//             <Hbox.Item hAlign="flex-end" vAlign="center">
//               <H5>
//                 {cattles?.length} {cattles?.length === 1 ? 'cabeça' : 'cabeças'}
//               </H5>
//             </Hbox.Item>
//           </Hbox>
//           <Row>
//             <Checkbox name="bulls" id="bulls">
//               Bois
//             </Checkbox>
//             <Checkbox name="cows" id="cows">
//               Vacas
//             </Checkbox>
//             <Checkbox name="calfs" id="calfs">
//               Bezerros
//             </Checkbox>
//           </Row>

//           <Separator type="Small" />

//           <Row>
//             <Col xs={12}>
//               <Hbox>
//                 <Hbox.Item noGrow>
//                   <Select
//                     options={selectEstado || []}
//                     label="Estado"
//                     name="state"
//                     id="state"
//                   />
//                 </Hbox.Item>
//                 <Hbox.Separator />
//                 <Hbox.Item noGrow>
//                   <Select
//                     options={selectColors}
//                     label="Cor do brinco"
//                     name="color"
//                     id="color"
//                   />
//                 </Hbox.Item>
//                 <Hbox.Separator />
//                 <Hbox.Item noGrow>
//                   <Select
//                     options={selectOrder}
//                     label="Ordenar por"
//                     name="orderBy"
//                     id="orderBy"
//                   />
//                 </Hbox.Item>
//                 <Hbox.Separator />
//                 <Hbox.Item hAlign="flex-end">
//                   <Button> Filtrar</Button>
//                 </Hbox.Item>
//               </Hbox>
//             </Col>
//           </Row>
//         </form>

//         <Separator type="Medium" />

//         <Row>
//           {cattles?.map(item => {
//             return (
//               <Col xs={12} key={item}>
//                 <LinkStyled to={`/cattles/${item?.id}`}>
//                   <Frame paddingSize="Small" clickable>
//                     <Hbox>
//                       <Hbox.Item noGrow>
//                         <Frame paddingSize="Small" type="primary">
//                           <IconStyled>{faIcon.cowBody}</IconStyled>
//                         </Frame>
//                       </Hbox.Item>

//                       <Hbox.Separator />

//                       <Hbox.Item noGrow vAlign="center">
//                         <Hbox>
//                           <BoxStyled vAlign="center">
//                             <H3>
//                               #{item?.n_etiqueta}/{item?.cor_brinco}
//                             </H3>{' '}
//                             <Separator type="Nano" /> <H5>{item?.tipo}</H5>
//                           </BoxStyled>
//                         </Hbox>
//                         <H5> 430 kg &bull; {item?.idade}</H5>
//                       </Hbox.Item>
//                     </Hbox>
//                   </Frame>
//                 </LinkStyled>
//                 <Separator type="XNano" />
//               </Col>
//             );
//           })}
//         </Row>
//       </Grid>
//       <LinkStyled to="/add-cattle">
//         <RoundButton size="Medium">+</RoundButton>
//       </LinkStyled>
//     </>
//   );
// };
