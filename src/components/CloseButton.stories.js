import Template from './CloseButton';

export default {
  title: 'Basic/CloseButton', // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(Divider)
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000' }]
    }
  },
  controls: { hideNoControlsWarning: true } // 컨트롤 경고 메시지 숨김 설정
};

export const Primary = {
  args: {
    setShow: () => {}
  },
  render: props => <Template {...props} />
};
