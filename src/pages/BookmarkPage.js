import React, { useState, useEffect } from 'react';

import ItemList from '../components/ItemList';

const data = [
  {
    id: 35,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '코카콜라',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 2003
  },
  {
    id: 99,
    type: 'Exhibition',
    title: '방 꾸미기 꿀템 모음',
    sub_title: '조명부터 패브릭까지',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand_image_url: null,
    follower: null
  },
  {
    id: 75,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '유니클로',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1571865194649-6464b12a76e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80',
    follower: 9914
  },
  {
    id: 22,
    type: 'Product',
    title: '카페라떼',
    sub_title: null,
    brand_name: null,
    price: '2500',
    discountPercentage: 50,
    image_url:
      'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 29,
    type: 'Product',
    title: '에어팟 맥스',
    sub_title: null,
    brand_name: null,
    price: '110520',
    discountPercentage: 50,
    image_url:
      'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 10,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '프라다',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1607085941350-7d46c83aa9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 5721
  },
  {
    id: 65,
    type: 'Category',
    title: '주얼리',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 4,
    type: 'Product',
    title: '애플워치 Ultra',
    sub_title: null,
    brand_name: null,
    price: '1073500',
    discountPercentage: 50,
    image_url:
      'https://images.unsplash.com/photo-1664730022301-2019f0ecf14d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 14,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '나이키',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1608541737042-87a12275d313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80',
    follower: 7598
  },
  {
    id: 89,
    type: 'Product',
    title: '맥북 프로 16인치 M1',
    sub_title: null,
    brand_name: null,
    price: '3290000',
    discountPercentage: 20,
    image_url:
      'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 5,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '바볼랏',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1544287757-a8ab80d90b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    follower: 4304
  },
  {
    id: 80,
    type: 'Exhibition',
    title: '오감 발달에 최고',
    sub_title: '아이 장난감 BEST',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1575364289437-fb1479d52732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 41,
    type: 'Exhibition',
    title: '소중한 내 차를 위해',
    sub_title: '차량 용품 전문관',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 49,
    type: 'Product',
    title: '윌슨 농구공',
    sub_title: null,
    brand_name: null,
    price: '22300',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1523142096306-cca37b5aa001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 82,
    type: 'Category',
    title: '음악',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 66,
    type: 'Category',
    title: '캠핑',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 67,
    type: 'Product',
    title: '아이스크림 모자',
    sub_title: null,
    brand_name: null,
    price: '11900',
    discountPercentage: 50,
    image_url:
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
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
  },
  {
    id: 53,
    type: 'Exhibition',
    title: '백화점 인기 BEST',
    sub_title: '전제품 최대 70%',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1562280963-8a5475740a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 58,
    type: 'Product',
    title: '싱글브레스트 코트',
    sub_title: null,
    brand_name: null,
    price: '149000',
    discountPercentage: 30,
    image_url:
      'https://images.unsplash.com/photo-1514813836041-518668f092b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 32,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '버버리',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1445633814773-e687a5de9baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 4791
  },
  {
    id: 16,
    type: 'Category',
    title: '전자기기',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 19,
    type: 'Exhibition',
    title: '여행 갈 때 필수템',
    sub_title: '선착순 추가 15% 할인 쿠폰',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 88,
    type: 'Exhibition',
    title: '한 권의 휴식',
    sub_title: '현대인 필독서 모음',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 87,
    type: 'Category',
    title: '베이커리',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1581339399838-2a120c18bba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 40,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '골든구스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1639911901706-7662ca129167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    follower: 3139
  },
  {
    id: 6,
    type: 'Product',
    title: '나이키 테니스 스커트',
    sub_title: null,
    brand_name: null,
    price: '49000',
    discountPercentage: 45,
    image_url:
      'https://images.unsplash.com/photo-1659980346614-30e3bce4c157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 24,
    type: 'Category',
    title: '축구',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 23,
    type: 'Product',
    title: '뉴발란스990',
    sub_title: null,
    brand_name: null,
    price: '229000',
    discountPercentage: 25,
    image_url:
      'https://images.unsplash.com/photo-1667453799963-5509cd48986a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 63,
    type: 'Category',
    title: '원피스',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 79,
    type: 'Exhibition',
    title: '멍냥이도 꿀잠이 필요해',
    sub_title: '반려동물을 위한 수면용품',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 85,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '크록스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1603145733190-59811e523c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 8764
  },
  {
    id: 21,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '펩시',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80',
    follower: 3940
  },
  {
    id: 45,
    type: 'Product',
    title: '워싱 반바지',
    sub_title: null,
    brand_name: null,
    price: '69700',
    discountPercentage: 40,
    image_url:
      'https://plus.unsplash.com/premium_photo-1666265087913-9326638decfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 98,
    type: 'Exhibition',
    title: '사무 용품 전문관',
    sub_title: '업무 효율 극대화!',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 8,
    type: 'Category',
    title: '가드닝',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 52,
    type: 'Exhibition',
    title: '음식의 색채',
    sub_title: '색깔별 음식 모음전',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1491600395818-515d7b81de11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1785&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 50,
    type: 'Exhibition',
    title: '취미부자 기획전',
    sub_title: '취미 시작 세트 최대 80% 할인',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 69,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '캐논',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 4324
  },
  {
    id: 77,
    type: 'Category',
    title: '나들이',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1567708233986-87de01b33b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 38,
    type: 'Category',
    title: '육류',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 91,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '반스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1560858001-2a568c6ea1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 5022
  },
  {
    id: 84,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '애플',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 9201
  },
  {
    id: 76,
    type: 'Category',
    title: '파티용품',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    brand_image_url: null,
    follower: null
  },
  {
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
  },
  {
    id: 92,
    type: 'Product',
    title: '리바이스 청바지',
    sub_title: null,
    brand_name: null,
    price: '29900',
    discountPercentage: 35,
    image_url:
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80',
    brand_image_url: null,
    follower: null
  },
  {
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
  },
  {
    id: 0,
    type: 'Product',
    title: '나이키 유니폼',
    sub_title: null,
    brand_name: null,
    price: '149000',
    discountPercentage: 10,
    image_url:
      'https://images.unsplash.com/photo-1559634761-b542379908a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 64,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '뉴에라',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1514866208388-0a68921c26bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 2306
  },
  {
    id: 90,
    type: 'Exhibition',
    title: '맥북 모음전',
    sub_title: '애플 케어 추가 할인',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 96,
    type: 'Category',
    title: '다이어트',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1627820751275-e44b937c5d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 74,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '소니',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 6808
  },
  {
    id: 3,
    type: 'Category',
    title: '커피',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 78,
    type: 'Exhibition',
    title: '나에게 딱맞는 키보드',
    sub_title: '기계식 키보드 입문부터 전문가까지',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 25,
    type: 'Category',
    title: '화장품',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1608979087030-1a1ab4d262c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 17,
    type: 'Exhibition',
    title: '새 신을 신고 뛰어보자 폴짝!',
    sub_title: '인기 운동화 할인 최대 70%',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1617906641143-2bfcd52ec640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 44,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '질레트',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1559715544-33be62554de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    follower: 2958
  },
  {
    id: 83,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '스타벅스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1561780339-45013972bece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    follower: 9857
  },
  {
    id: 61,
    type: 'Exhibition',
    title: '여기 가봤어?',
    sub_title: '여행 필수 코스 모음',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 59,
    type: 'Category',
    title: '과일',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 95,
    type: 'Category',
    title: '여행',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1517667436824-1ade00b70161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 42,
    type: 'Product',
    title: '에어팟 프로 2세대',
    sub_title: null,
    brand_name: null,
    price: '331900',
    discountPercentage: 30,
    image_url:
      'https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 13,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '발렌티노',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 8572
  },
  {
    id: 31,
    type: 'Product',
    title: '바볼랏 퓨어드라이브 테니스 라켓',
    sub_title: null,
    brand_name: null,
    price: '250000',
    discountPercentage: 25,
    image_url:
      'https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 11,
    type: 'Product',
    title: '윌슨 테니스공',
    sub_title: null,
    brand_name: null,
    price: '155000',
    discountPercentage: 35,
    image_url:
      'https://images.unsplash.com/photo-1589550458041-48caacbe4367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 47,
    type: 'Exhibition',
    title: 'UP TO 23% SALE',
    sub_title: '다시 없는 역대급 혜택',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 33,
    type: 'Product',
    title: '프리미엄 리넨 셔츠',
    sub_title: null,
    brand_name: null,
    price: '39900',
    discountPercentage: 30,
    image_url:
      'https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 62,
    type: 'Category',
    title: '보드게임',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 26,
    type: 'Product',
    title: '나이키 바람막이',
    sub_title: null,
    brand_name: null,
    price: '74100',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1606105961732-6332674f4ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 71,
    type: 'Exhibition',
    title: '인생샷 핫플레이스',
    sub_title: '입장권 구매시 기념품 증정',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand_image_url: null,
    follower: null
  },
  {
    id: 86,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '칼하트',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1622408298915-24d322badf9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    follower: 6287
  },
  {
    id: 51,
    type: 'Product',
    title: '나이키 조거 팬츠',
    sub_title: null,
    brand_name: null,
    price: '64500',
    discountPercentage: 40,
    image_url:
      'https://images.unsplash.com/photo-1580906853203-f493cea9ff28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 15,
    type: 'Product',
    title: '여성 운동복 세트',
    sub_title: null,
    brand_name: null,
    price: '20900',
    discountPercentage: 35,
    image_url:
      'https://images.unsplash.com/photo-1605235186531-bbd852b09e69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 93,
    type: 'Exhibition',
    title: '왜 맨날 한 짝 밖에 없어?',
    sub_title: '쌀 때 미리 쟁여놓자',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1631024724206-6ccc65ab31bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 46,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '삼성',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1623588958271-8c019027feed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 8367
  },
  {
    id: 94,
    type: 'Exhibition',
    title: '한 끼 준비 간단하게 끝',
    sub_title: '후기 폭발 간편식품 모음',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1627662168806-efa33a7cda86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 37,
    type: 'Product',
    title: '뉴에라 모자',
    sub_title: null,
    brand_name: null,
    price: '28000',
    discountPercentage: 30,
    image_url:
      'https://images.unsplash.com/photo-1582748154704-99819866fb8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 20,
    type: 'Product',
    title: 'Apple Studio Display',
    sub_title: null,
    brand_name: null,
    price: '2630000',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1647779058330-848fa687fcb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 12,
    type: 'Category',
    title: '남성패션',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 9,
    type: 'Exhibition',
    title: '내 친구도 테니스',
    sub_title: '테니스 입문자 용품 세트',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1560012057-4372e14c5085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 70,
    type: 'Exhibition',
    title: '주방 용품 모음전',
    sub_title: '인덕션 냄비 반값 할인 중',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 2,
    type: 'Category',
    title: '조명',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1617363020293-62faac14783d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 43,
    type: 'Exhibition',
    title: '탄탄한 몸매 만들기',
    sub_title: '헬스/필라테스 용품 골라 담기',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 73,
    type: 'Product',
    title: '아이맥 24인치',
    sub_title: null,
    brand_name: null,
    price: '1573390',
    discountPercentage: 40,
    image_url:
      'https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 39,
    type: 'Exhibition',
    title: '집 안이 화사해져요',
    sub_title: '꽃병 & 꽃 모아보기',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1655197077485-f0b6ad471c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1437&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 56,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '캐나다구스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1557949705-93a42a2ce7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    follower: 3572
  },
  {
    id: 27,
    type: 'Product',
    title: '캐릭터 양말',
    sub_title: null,
    brand_name: null,
    price: '12900',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1566563634870-d566ab58a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null
  },
  {
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
  },
  {
    id: 30,
    type: 'Category',
    title: '장난감',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 81,
    type: 'Category',
    title: '인테리어',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    brand_image_url: null,
    follower: null
  },
  {
    id: 68,
    type: 'Exhibition',
    title: '요즘 브런치가 핫하던데?',
    sub_title: '브런치 밀키트',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1626372416494-3183a0c4f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 57,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '구찌',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1560519622-7229023b9c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    follower: 8094
  },
  {
    id: 97,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '윌슨',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 1388
  },
  {
    id: 34,
    type: 'Category',
    title: '반려동물',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 1,
    type: 'Product',
    title: '아이폰 13 256GB',
    sub_title: null,
    brand_name: null,
    price: '1285430',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 36,
    type: 'Exhibition',
    title: '카공족 필수템',
    sub_title: '베스트 아이템 30% 할인',
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1516342243255-ac2202f9f149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 55,
    type: 'Category',
    title: '운동화',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 18,
    type: 'Category',
    title: '향수',
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1630573133526-8d090e0269af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null
  },
  {
    id: 72,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '뉴발란스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1515355758951-b4b20ba84c1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 9362
  },
  {
    id: 60,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '아디다스',
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    follower: 9023
  }
];

const BookmarkPage = () => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    const getData = async () => {
      // const data = await fetch(
      //   'http://cozshopping.codestates-seb.link/api/v1/products'
      // ).then(resp => resp.json());
      return data;
    };

    getData().then(d => {
      setItems(d);
    });
  }, []);

  return <ItemList items={items} type={type} setType={setType} alreadyLiked />;
};

export default BookmarkPage;
