import styled from 'styled-components';
import CloseButton from '../components/CloseButton';
import StarButton from './StarButton';

const ImageModal = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ImageModalBox = styled.div`
  width: 744px;
  height: 480px;
  overflow: hidden;
  border-radius: 12px;
  border: rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));
`;

const ImageModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TitleBox = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ModalImage = ({ image, setShow, title }) => {
  return (
    <ImageModal>
      <ImageModalBox>
        <img src={image} alt="img" />
        <CloseButton setShow={setShow} />
        <TitleBox>
          <StarButton />
          <ImageModalTitle>{title}</ImageModalTitle>
        </TitleBox>
      </ImageModalBox>
    </ImageModal>
  );
};

export default ModalImage;
