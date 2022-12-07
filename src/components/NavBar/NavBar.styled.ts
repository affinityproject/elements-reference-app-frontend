import styled from 'styled-components'
import { pxToRem } from 'utils'

export const Container = styled.div`
  background: #0e1533;
  padding: ${pxToRem(20)} ${pxToRem(24)};
  height: ${pxToRem(64)};
  text-align: right;
  position: relative;
  width: 100%;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (min-width: ${pxToRem(500)}) {
    padding: ${pxToRem(22)} ${pxToRem(100)};
    height: ${pxToRem(72)};
  }
`



export const ButtonContainer = styled.div`
  cursor: pointer;
  margin-bottom: ${pxToRem(24)};
`
export const Logo = styled.img`
  cursor: pointer;
  width: ${pxToRem(100)};
  height: ${pxToRem(24)};
  @media (min-width: ${pxToRem(500)}) {
    width: ${pxToRem(139)};
    height: ${pxToRem(32)};
  }
`
export const Icon = styled.img`
  cursor: pointer;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  @media (min-width: ${pxToRem(500)}) {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
  }
`
