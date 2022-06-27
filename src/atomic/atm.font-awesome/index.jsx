import React from 'react';

import {
  faHome,
  faEllipsisV,
  faAngleDown,
  faClipboard,
  faMoneyCheckAlt,
  faPaw,
  faListOl,
  faShoppingCart,
  faTag,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import { SiHappycow } from 'react-icons/si';
import { GiCow } from 'react-icons/gi';

import { MdEdit } from 'react-icons/md';

import { AiOutlineArrowDown } from 'react-icons/ai';

export const faIcon = {
  home: <FontAwesomeIcon icon={faHome} />,
  ellipsisV: <FontAwesomeIcon icon={faEllipsisV} />,
  angleDown: <FontAwesomeIcon icon={faAngleDown} />,
  clipboard: <FontAwesomeIcon icon={faClipboard} />,
  moneyCheckAlt: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
  paw: <FontAwesomeIcon icon={faPaw} />,
  cow: <SiHappycow />,
  cowBody: <GiCow />,
  check: <BsFillCheckCircleFill />,
  listOl: <FontAwesomeIcon icon={faListOl} />,
  shoppingCart: <FontAwesomeIcon icon={faShoppingCart} />,
  edit: <MdEdit />,
  arrowDown: <AiOutlineArrowDown />,
  tag: <FontAwesomeIcon icon={faTag} />,
  times: <FontAwesomeIcon icon={faTimes} />,
};
