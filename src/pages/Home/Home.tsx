import { FC } from 'react'
import { useNavigate } from 'react-router'
import { PATHS } from 'router/paths'
import { Container, Header, Typography } from 'components'
import { IssuerFlowIcon, HolderFlowIcon, VerifierFlowIcon } from '../../assets'
import * as S from './Home.styled'

export const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header title="Home" />
      <Container isHome title="Please select one of the following options">
        <S.Card onClick={() => navigate(PATHS.HOLDER.HOME)}>
          <S.Details>
            <S.Heading variant="h7">Collect credential</S.Heading>
            <Typography variant="p2">
              Collect your credentials or view credentials stored in your wallet
            </Typography>
          </S.Details>
          <HolderFlowIcon />
        </S.Card>
        <S.Card onClick={() => navigate(PATHS.VERIFIER.WELCOME)}>
          <S.Details>
            <S.Heading variant="h7">Verify credential</S.Heading>
            <Typography variant="p2">Verify credentials with a QR code scanner</Typography>
          </S.Details>
          <VerifierFlowIcon />
        </S.Card>
        <S.Card $disabled>
          <S.Details>
            <S.Heading variant="h7">Issue credential</S.Heading>
            <Typography variant="p2">Issue credentials to your customers easily</Typography>
          </S.Details>
          <IssuerFlowIcon />
        </S.Card>
      </Container>
    </>
  )
}
