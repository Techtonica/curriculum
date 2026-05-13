import { useEffect } from "react"
import useAPI from "../../useAPI"

const MultipleFetches = () => {
  const [postResponse, callPostAPI] = useAPI()
  const [commentsResponse, callCommentsAPI] = useAPI()

  useEffect(() => {
    if (postResponse.success) {
      callCommentsAPI("https://jsonplaceholder.typicode.com/posts/1/comments")
    }
  }, [postResponse.success, callCommentsAPI])

  return (
    <div>
      <button onClick={() => callPostAPI("https://jsonplaceholder.typicode.com/posts/1")}>
        Fetch post and comments
      </button>
      <div>
        {postResponse.loading && <div data-testid="fetch-loading-post">Loading post...</div>}
        {postResponse.error && <div data-testid="fetch-error-post">{postResponse.error}</div>}
        {postResponse.success && <div data-testid="fetch-post">{postResponse.data.title}</div>}
      </div>
      {!postResponse.loading && (
        <div>
          {commentsResponse.loading && <div data-testid="fetch-loading-comments">Loading comments...</div>}
          {commentsResponse.error && <div data-testid="fetch-error-comments">{commentsResponse.error}</div>}
          {commentsResponse.success && (
            <ul>
              {commentsResponse.data.slice(0, 10).map((comment) => (
                <li key={comment.id} data-testid="comment-author">
                  {comment.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {postResponse.success && commentsResponse.success && <div data-testid="multiple-fetch-success">All fetched!</div>}
    </div>
  )
}

export default MultipleFetches