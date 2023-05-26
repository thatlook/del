import Template from './ModalImage';

export default {
  title: 'Basic/ModalImage', // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(Divider)
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  controls: { hideNoControlsWarning: true } // 컨트롤 경고 메시지 숨김 설정
};

export const Primary = {
  args: {
    image:
      'https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
    setShow: () => {},
    title: 'some title'
  },
  render: props => <Template {...props} />
};
