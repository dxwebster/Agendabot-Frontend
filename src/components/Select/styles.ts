import styled from 'styled-components';

interface Props {
  isWhithoutMarginTop?: boolean;
  differentColor?: boolean;
}

export const SelectBlock = styled.div<Props>`
  position: relative;
  margin-top: 20px;
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    /*O content ele e obrigatorio sempre que usarmos o after ou o before.*/
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    /*left somado com o right dar aquele 3.2 que tiramos do width*/
    bottom: 0;
  }

  > label {
    color: ${(props) => props.differentColor
      ? 'var(--color-text-in-primary)' : 'var(--color-text-complement)'};
    font-size: 18px;
  }
  > select {
    width: 100%;
    height: 54px;
    margin-top: 0.8rem;
    margin-bottom: 20px;
    border-radius: 8px;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 16px Archivo;
  }
`as React.FC<Props>;
