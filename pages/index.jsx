import Head from 'next/head'
import ItemList from 'src/components/layout/ItemList'
import 'semantic-ui-css/semantic.min.css'
import Gnb from 'src/components/layout/Gnb'
import Banner from 'src/components/layout/Banner'
import Axios from 'axios'

export default function Home({ list }) {
  return (
    <main>
      <Head>
        <title>케이해커 - 개발자 해외취업 커뮤니티</title>
        <meta name="description" content="index page" />
      </Head>
      <section>
        <Banner />
        <Gnb />
        <div>{list && list.content.map((item) => <ItemList item={item} />)}</div>
      </section>
      {/* <aside>
        <input type="text" />
      </aside> */}
    </main>
  )
}
export async function getServerSideProps() {
  const API_URL = 'http://127.0.0.1:8000'
  // const res = await Axios.get(API_URL)
  const res = await fetch(`${API_URL}/main`)
  const list = await res.json()
  if (!list) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      list,
    },
  }
}
// export async function getServerSideProps(context) {
//   const API_URL = 'http://localhost:3000/main'
//   const res = await Axios.get(API_URL)
//   return {
//     props: {
//       list: res.data,
//     },
//   }
// }
