import styled from 'styled-components'

import { theme } from 'core/theme'

const getFontSize = (size: string) => {
  switch (size) {
    case 'small':
      return `
        font-size: 16px;
        line-height: 24px;
      `
    case 'medium':
      return `
        font-size: 24px;
        line-height: 32px;
      `
    case 'large':
      return `
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -1px;
      `
    default:
      return `
        font-size: 24px;
        line-height: 32px;
      `
  }
}

export const TitleStyles = styled.h2<{ size: string }>`
  font-weight: 700;
  ${({ size }) => getFontSize(size)};
  color: ${theme.light.heading};
`
