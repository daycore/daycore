<template>
  <div class="hello">

    <my-header></my-header>
    <about></about>
    <news :articles="articles"></news>
    <members :members="members"></members>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  import About from './Main/About'
  import Members from './Main/Members'
  import MyFooter from './Main/Footer'

  export default {
    components: {
      MyFooter,
      Members,
      About,
      News,
      MyHeader
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        members: [
          {name: '최경민', position: '대표', image: require('@/assets/members/kyoungmin.jpg')},
          {name: '권혁', position: '개발', image: require('@/assets/members/hyeok.jpg')},
          {name: '김동환', position: '매니저', image: require('@/assets/members/donghwan.jpg')},
          {name: '구용석', position: '매니저', image: require('@/assets/members/yongseok.jpg')},
          {name: '고현주', position: '개발', image: require('@/assets/members/hyunjoo.jpg')},
          {name: '박관호', position: '개발', image: require('@/assets/members/parkkh.jpg')},
          {name: '송진표', position: '개발', image: require('@/assets/members/jinpyo.jpg')},
          {name: '이준', position: '랩짐데이', image: require('@/assets/members/leejun.png')},
          {name: '우동오', position: '개발', image: require('@/assets/members/dongo.jpg')},
          {name: '장우영', position: '디자이너', image: require('@/assets/members/wooyoung.jpg')},
          {name: '정현지', position: '개발', image: require('@/assets/members/hyundee.jpg')}
        ],
        articles: [
          {
            title: 'G.PACE 출시',
            description: '운동코치 짐데이, 블루투스 연동 스마트 체중계 G.PACE 출시',
            image: require('@/assets/articles/news1.png')
          },
          {
            title: '카파, 전문 스포츠 브랜드로 영역 확대',
            description: '확대를 하고 하고 또 하고',
            image: require('@/assets/articles/news2.png')
          },
          {
            title: '운동코치 짐데이, 피트니스 페스티벌 진행',
            description: '모바일 운동코치 짐데이, 20일 피트니스 페스티벌 진행',
            image: require('@/assets/articles/news3.png')
          },
          {
            title: '원앤파트너스 등으로부터 투자유치',
            description: '"운동코치 짐데이" 데이코어, 원앤파트너스 등으로부터 투자유치',
            image: require('@/assets/articles/news4.png')
          },
          {
            title: '스포츠 산업 "잡콘서트" 개최',
            description: '스포츠 산업 "잡콘서트" 개최...\n취업.창업, 트렌드에 민감하라',
            image: require('@/assets/articles/news5.png')
          },
          {
            title: '비싼 PT, 앱 하나면 끝',
            description: '삼성.네이버 출신 "몸짱" 개발자 "비싼 PT, 앱 하나면 끝"',
            image: require('@/assets/articles/news6.png')
          },
          {
            title: '"짐데이"오늘의 앱으로 선정',
            description: '[오늘의 앱]스마트폰이 피트니스 코치로..."짐데이"',
            image: require('@/assets/articles/news7.png')
          },
          {
            title: '으뜸앱 선정',
            description: '대한민국 모바일 어워드 5월의 으뜸앱 선정',
            image: require('@/assets/articles/news8.png')
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
