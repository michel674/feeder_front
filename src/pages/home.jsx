import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H1, H2, H3 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

import { useRequest } from '../hooks/useRequest.hook';

import { Recipient } from '../components/recipient.component';
import { Button } from '../atomic/atm.button';
import { useCallback, useEffect, useState } from 'react';

export const Home = () => {
  const { data: scheduleData, request: getSchedules } = useRequest({
    baseURL: 'http://localhost:1337',
    route: '/schedules',
  });

  useEffect(() => {
    getSchedules({ params: {}, withCredentials: false });
  }, [getSchedules]);

  // const [countdown, setCountdown] = useState();

  // const handleCountdown = useCallback(mostRecentSchedule => {
  //   const now = new Date().getTime();
  //   const countDownDate = new Date('Jun 28, 2022 12:37:25').getTime();

  //   console.log(mostRecentSchedule);

  //   const distance = countDownDate - now;

  //   var hours = Math.floor(distance / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   let result = hours + 'h ' + minutes + 'm ' + seconds + 's ';

  //   setCountdown(result);

  //   if (distance < 0) {
  //     clearInterval(countdown);
  //     return 'expired';
  //   }
  //   return result;
  // }, []);

  const controllerUrl = 'http://192.168.113.87/';

  const { data, request: getWaterMeasure } = useRequest({
    route: '/api/water-measures/1669',
  });

  const waterMeasure = data?.data?.attributes?.measure;

  const { request: turnOnMotor } = useRequest({
    baseURL: controllerUrl,
    route: '/H',
  });

  const { request: turnOffMotor } = useRequest({
    baseURL: controllerUrl,
    route: '/L',
  });

  useEffect(() => {
    getWaterMeasure({ params: {}, withCredentials: false });
  }, [getWaterMeasure]);

  const handleUpdateWaterMeasure = useCallback(() => {
    getWaterMeasure({ params: {}, withCredentials: false });
  }, [getWaterMeasure]);

  const handleFillWater = useCallback(() => {
    turnOnMotor({ params: {}, withCredentials: false });
  }, [turnOnMotor]);

  const handleFillFood = useCallback(() => {
    turnOffMotor({ params: {}, withCredentials: false });
  }, [turnOffMotor]);

  const handleUpdate = () => {
    getWaterMeasure({ params: {}, withCredentials: false });
  };

  return (
    <>
      <Separator type="Small" />
      <Grid>
        <Row>
          <Col xs={12}>
            <Frame clickable>
              <Hbox>
                <Hbox.Item hAlign="center">
                  <H3>Próxima refeição em</H3>
                  <Separator type="Small" />
                  <H1>{'12h23m40s'}</H1>
                  <Separator type="Small" />
                </Hbox.Item>
              </Hbox>
            </Frame>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          <Col xs={12}>
            <Button expanded onClick={handleUpdateWaterMeasure}>
              <H2 color="white">Refresh</H2>
            </Button>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          <Col xs={6}>
            <Hbox>
              <Hbox.Item hAlign="center">
                <H3>Ração</H3>
              </Hbox.Item>
            </Hbox>
            <Separator type="XNano" />
            <Recipient volume={73} />
            <Separator type="Nano" />

            <Button expanded onClick={handleFillFood}>
              Encher
            </Button>
          </Col>

          <Col xs={6}>
            <Hbox>
              <Hbox.Item hAlign="center">
                <H3>Água</H3>
              </Hbox.Item>
            </Hbox>
            <Separator type="XNano" />
            <Recipient type={'secondary'} volume={Number(waterMeasure) || 0} />
            <Separator type="Nano" />

            <Button expanded onClick={handleFillWater}>
              Encher
            </Button>
            <div onClick={handleFillWater}>Encher teste</div>
          </Col>
        </Row>
        <Separator type="Medium" />
        <H3>{controllerUrl}</H3>
      </Grid>
    </>
  );
};
