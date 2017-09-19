<template>
  <div class="hello">

    <my-header :download="download"></my-header>
    <about :download="download"></about>
    <news :articles="articles"></news>
    <members :members="members"></members>
    <contact-us></contact-us>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  import About from './Main/About'
  import Members from './Main/Members'
  import MyFooter from './Main/Footer'
  import ContactUs from './Main/ContactUs'

  export default {
    components: {
      MyFooter,
      Members,
      About,
      News,
      MyHeader,
      ContactUs
    },
    name: 'main',
    data () {
      return {
        download: 'https://play.google.com/store/apps/details?id=kr.co.igrove.gymday',
        members: {
          management: [
            {name: '최경민', position: 'CEO', image: require('@/assets/members/kyoungmin.jpg')},
            {name: '김동환', position: 'Team Manager', image: require('@/assets/members/donghwan.jpg')},
            {name: '구용석', position: 'Marketer', image: require('@/assets/members/yongseok.jpg')},
            {name: '장우영', position: 'Designer', image: require('@/assets/members/wooyoung.jpg')}
          ],
          development: [
            {name: '권혁', position: 'Server Developer', image: require('@/assets/members/hyeok.jpg')},
            {name: '정현지', position: 'Android Developer', image: require('@/assets/members/hyundee.jpg')},
            {name: '고현주', position: 'Web Developer', image: require('@/assets/members/hyunjoo.jpg')},
            {name: '우동오', position: 'Web Developer', image: require('@/assets/members/dongo.jpg')}
          ],
          training: [
            {name: 'EDI', position: 'Gymday Coach', image: require('@/assets/members/edi.png')},
            {name: 'RAY', position: 'Gymday Coach', image: require('@/assets/members/ray.png')}
          ]
        },
        articles: [
          {
            title: '2016 올해를 빛낸 자기계발 앱 선정',
            description: '구글이 뽑은 2016 올해를 빛낸 자기계발 앱 1위',
            image: require('@/assets/articles/news10.jpg')
          },
          {
            title: '오프라인 플래그십 스튜디오 랩짐데이 오픈',
            description: '운동코치 짐데이, 오프라인 플래그십 스튜디오 랩짐데이 오픈',
            image: require('@/assets/articles/news9.png')
          },
          {
            title: '구글 에디터 추천 앱 선정',
            description: '운동코치 짐데이, 구글 에디터 추천 앱 선정',
            image: require('@/assets/articles/news11.png')
          },
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
    },
    mounted: function () {
      this.checkBrowser()
    },
    methods: {
      checkBrowser: function () { // 브라우저에 따라 앱 스토어 링크 변경
        const ua = navigator.userAgent.toLowerCase()

        if (ua.indexOf('safari') !== -1) {
          if (ua.indexOf('chrome') <= -1) { // Safari
            this.download = 'https://itunes.apple.com/kr/genre/ios/id36?mt=8'
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
