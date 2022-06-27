import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { useState, useEffect } from 'react';
import { Hbox } from '../atm.box/hbox.styled';
import { Separator } from '../atm.separator/separator.styled';
import { H3, H5 } from '../../components/typography';
import {
  UserAvatarStyled,
  AvatarWrapperStyled,
  AvatarPopUpStyled,
  PopUpItemStyled,
  PopupBackground,
} from './avatar.styled';
import { LinkStyled } from '../atm.link/link.styled';
import { useRequest } from '../../hooks/useRequest.hook';
import { getInitials } from '../../utils/get-initials';

export const Avatar = () => {
  const [open, setOpen] = useState(false);

  // const { data, request } = useRequest({ route: '/usuario/get' });

  // useEffect(() => {
  //   request({ withCredentials: true, params: null });
  // }, [request]);

  return (
    <>
      {open && (
        <>
          <PopupBackground onClick={() => setOpen(!open)} />
        </>
      )}
      <AvatarWrapperStyled>
        <UserAvatarStyled onClick={() => setOpen(!open)}>
          {' '}
          MF
        </UserAvatarStyled>
        {open && (
          <>
            <AvatarPopUpStyled>
              <Grid>
                <Row>
                  <Col>
                    <Hbox>
                      <Hbox.Item noGrow>
                        <UserAvatarStyled displayOnly>
                          ME
                        </UserAvatarStyled>
                      </Hbox.Item>
                      <Hbox.Separator />
                      <Hbox.Item vAlign="center">
                        <H3>Michel Elesbão</H3>
                        <H5>Estudante</H5>
                      </Hbox.Item>
                    </Hbox>
                  </Col>
                </Row>
                <Separator type="Nano" />
                <Row>
                  <Col xs={12}>
                    <PopUpItemStyled>Editar</PopUpItemStyled>
                  </Col>
                  <Col xs={12}>
                    <LinkStyled to="/login">
                      <PopUpItemStyled>Sair</PopUpItemStyled>
                    </LinkStyled>
                  </Col>
                </Row>
              </Grid>
            </AvatarPopUpStyled>
          </>
        )}
      </AvatarWrapperStyled>
    </>
  );
};
