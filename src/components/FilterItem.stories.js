import Template from './FilterItem';

import all from '../assets/product-all.png';

export default {
  title: 'Basic/FilterItem', // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(Divider)
  parameters: {
    backgrounds: {
      default: { value: 'light' } // 스토리의 배경색 설정
    }
  },
  controls: { hideNoControlsWarning: true } // 컨트롤 경고 메시지 숨김 설정
};

export const Primary = {
  args: {
    name: 'all',
    setType: () => {},
    image: all,
    korName: '전체',
    isSelected: true
  },
  argTypes: {
    isSelected: {
      options: [true, false]
    }
  },
  render: props => <Template {...props} />
};
