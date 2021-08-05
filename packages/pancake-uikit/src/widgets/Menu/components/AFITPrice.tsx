import React from "react";
import styled from "styled-components";
import { AFITRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  afitPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const AFITPrice: React.FC<Props> = ({ afitPriceUsd }) => {
  return afitPriceUsd ? (
    <PriceLink
      href="/swap?outputCurrency=0x4516bb582f59befcbc945d8c2dac63ef21fba9f6"
      target="_blank"
    >
      <AFITRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${afitPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(AFITPrice);
