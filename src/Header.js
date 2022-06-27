import {
  Head,
  HeaderLogo,
  HeaderSeparatorStyled,
} from './components/header.styled';
import { Grid } from 'react-flexbox-grid';
import { Hbox } from './atomic/atm.box/hbox.styled';
import { Avatar } from './atomic/atm.avatar';

const Header = () => {
  return (
    <>
      <Head>
        <Grid>
          <Hbox>
            <Hbox.Item hAlign="flex-start">
              <HeaderLogo to="/home" activeStyle>
                Feeder
              </HeaderLogo>
            </Hbox.Item>

            <Hbox.Item hAlign="flex-end" noGrow>
              <Avatar />
            </Hbox.Item>
          </Hbox>
        </Grid>
      </Head>

      <HeaderSeparatorStyled />
    </>
  );
};

export default Header;
