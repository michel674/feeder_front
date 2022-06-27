import React, { useState } from 'react';
import { faIcon } from '../atm.font-awesome';
import {
  MoreButtonWrapperStyled,
  MoreWrapperStyled,
  PopupBackground,
  PopupStyled,
  PopUpItemStyled,
  MoreIconStyled,
} from './more-button.styled';
import { Hbox } from '../atm.box/hbox.styled';
import { LinkStyled } from '../atm.link/link.styled';

export const MoreButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <PopupBackground onClick={() => setOpen(!open)} />}
      <MoreWrapperStyled>
        <MoreButtonWrapperStyled onClick={() => setOpen(!open)}>
          <h1>{faIcon.ellipsisV}</h1>
        </MoreButtonWrapperStyled>
        {open && (
          <PopupStyled>
            <LinkStyled to="edit">
              <PopUpItemStyled>
                <Hbox>
                  <Hbox.Item hAlign="flex-start" vAlign="center" noGrow>
                    <MoreIconStyled>{faIcon.edit}</MoreIconStyled>
                  </Hbox.Item>
                  <Hbox.Separator />

                  <Hbox.Item vAlign="center">Editar</Hbox.Item>
                </Hbox>
              </PopUpItemStyled>
            </LinkStyled>
            <LinkStyled to="loose">
              <PopUpItemStyled>
                <Hbox>
                  <Hbox.Item hAlign="flex-start" vAlign="center" noGrow>
                    <MoreIconStyled>{faIcon.arrowDown}</MoreIconStyled>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item vAlign="center">Baixa</Hbox.Item>
                </Hbox>
              </PopUpItemStyled>
            </LinkStyled>
          </PopupStyled>
        )}
      </MoreWrapperStyled>
    </>
  );
};
