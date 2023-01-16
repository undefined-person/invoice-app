import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
