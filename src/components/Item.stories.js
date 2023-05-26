import Template from './Item';

export default {
  title: 'Basic/Item', // 스토리 분류 및 컴포넌트 이름
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
    data: {
      id: 48,
      type: 'Product',
      title: '나이키 트레일 페가수스',
      sub_title: null,
      brand_name: null,
      price: '183330',
      discountPercentage: 40,
      image_url:
        'https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      brand_image_url: null,
      follower: null
    }
  },
  render: props => <Template {...props} />
};

export const Category = {
  args: {
    data: {
      id: 28,
      type: 'Category',
      title: '미술',
      sub_title: null,
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url:
        'https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      brand_image_url: null,
      follower: null
    }
  },
  render: props => <Template {...props} />
};

export const Exhibition = {
  args: {
    data: {
      id: 7,
      type: 'Exhibition',
      title: '주인님이 정신 못차려요',
      sub_title: '고양이 장난감 기획전',
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url:
        'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      brand_image_url: null,
      follower: null
    }
  },
  render: props => <Template {...props} />
};

export const Brand = {
  args: {
    data: {
      id: 54,
      type: 'Brand',
      title: null,
      sub_title: null,
      brand_name: '코드스테이츠',
      price: null,
      discountPercentage: null,
      image_url: null,
      brand_image_url:
        'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      follower: 9871
    }
  },
  render: props => <Template {...props} />
};
