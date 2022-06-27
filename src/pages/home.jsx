import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H1, H3 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

import { useRequest } from '../hooks/useRequest.hook';

import { Recipient } from '../components/recipient.component';
import { Button } from '../atomic/atm.button';
import { useCallback, useEffect, useState } from 'react';

export const Home = () => {
  const { request: turnOn } = useRequest({ route: '/LM' });
  const { request: turnOff } = useRequest({
    route: '/DM',
  });

  const { data: scheduleData, request: getSchedules } = useRequest({
    baseURL: 'http://localhost:1337',
    route: '/schedules',
  });

  useEffect(() => {
    getSchedules({ params: {}, withCredentials: false });
  }, [getSchedules]);

  const handleTurnLedOn = () => {
    turnOn({ params: {}, withCredentials: false });
  };

  const handleTurnLedOff = () => {
    turnOff({ params: {}, withCredentials: false });
  };

  const [countdown, setCountdown] = useState();

  const getMostCloseSchedule = useCallback(scheduleData => {
    const now = new Date().getHours();

    console.log('now', now);

    const schedules = scheduleData
      ?.map?.(element => Number(element.schedule.slice(0, 2)))
      ?.sort((a, b) => a - b);

    const nextToday = schedules?.find(item => item - now > 0);

    const mostCloseDate = new Date();
    mostCloseDate.setHours(0, 0, 0, 0);

    if (nextToday) {
      mostCloseDate.setHours(mostCloseDate.getHours() + nextToday);
    } else {
      mostCloseDate.setDate(mostCloseDate.getDate() + schedules?.[0]);
      mostCloseDate.setHours(mostCloseDate.getHours());
    }
    return mostCloseDate;
  }, []);

  const mostRecentSchedule = getMostCloseSchedule(scheduleData);

  const handleCountdown = useCallback(mostRecentSchedule => {
    const now = new Date().getTime();
    const countDownDate = new Date('Jun 28, 2022 12:37:25').getTime();

    console.log(mostRecentSchedule);

    const distance = countDownDate - now;

    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let result = hours + 'h ' + minutes + 'm ' + seconds + 's ';

    setCountdown(result);

    if (distance < 0) {
      clearInterval(countdown);
      return 'expired';
    }
    return result;
  }, []);

  setInterval(handleCountdown, 1000);

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
                  <H1>{countdown}</H1>
                  <Separator type="Small" />
                </Hbox.Item>
              </Hbox>
            </Frame>
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

            <Button expanded onClick={handleTurnLedOn}>
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
            <Recipient type={'secondary'} volume={53} />
            <Separator type="Nano" />

            <Button expanded onClick={handleTurnLedOff}>
              Encher
            </Button>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
