import axios from 'axios'
import { HOST } from 'src/store/modules/user'

function Post({ pid, article, comment }) {
  console.log(comment)
  return (
    <>
      {article && (
        <div className="board">
          {/* <p>Post: {pid}</p> */}
          <div className="board--title">
            <h3>{article.board.title}</h3>
            <div>
              <span>{article.author.nickname}</span>&nbsp;|&nbsp;
              <span>{article.author.createdAt.replace('T', ' ').substring(0, 16)}</span>
            </div>
          </div>
          <div className="board--content">
            <p>{article.content}</p>
          </div>
          <div>댓글 {article.commentCount}</div>
        </div>
      )}
      {comment &&
        comment.map((each) => (
          <>
            <p>{each.author.nickname}</p>
            <p>{each.content}</p>
            <p>{each.createdAt.replace('T', ' ').substring(0, 16)}</p>
            <p>대댓글 {each.replyCount}</p>
            {each.replyCount > 0 &&
              each.replies.map((reply) => (
                <>
                  <p>{reply.content}</p>
                </>
              ))}
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
  console.log(res.data)
  return {
    props: {
      pid,
      article: res.data.article,
      comment: res.data.comment,
    },
  }
}
