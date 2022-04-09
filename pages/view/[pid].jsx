import axios from 'axios'
import { HOST } from 'src/store/modules/user'

function Post({ pid, article, comment }) {
  return (
    <>
      {article && (
        <div>
          <p>Post: {pid}</p>
          <p>{article.board.title}</p>
          <p>{article.author.nickname}</p>
          <p>{article.content}</p>
          <div>댓글 {article.commentCount}</div>
        </div>
      )}
      {comment &&
        comment.map((each) => (
          <>
            <p>{each.author.nickname}</p>
            <p>{each.content}</p>
            <p>{each.createdAt.replace('T', ' ').substring(0, 16)}</p>
          </>
        ))}
    </>
  )
}

export default Post

export async function getServerSideProps(context) {
  const pid = context.params.pid
  const url = `${HOST}/article/${pid}`
  const res = await axios.get(url)
  console.log(res.data.comment)
  return {
    props: {
      pid,
      article: res.data.article,
      comment: res.data.comment,
    },
  }
}
