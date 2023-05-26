import styled from 'styled-components';
import Close from '../assets/Vector.png';

const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CloseButton = ({ setShow }) => {
  return (
    <CloseWrapper>
      <img
        src={Close}
        alt="img"
        onClick={() => {
          setShow(false);
        }}
      />
    </CloseWrapper>
  );
};

export default CloseButton;
