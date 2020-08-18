import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

import { selectAllPosts, fetchPosts } from './postsSlice'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [ postStatus, dispatch ])

  const renderedPosts = orderedPosts.map(post => (
    <article key={ post.id } className='post-excerpt'>
      <h3>{ post.title }</h3>
      <PostAuthor userId={ post.user }/>
      <TimeAgo timestamp={ post.date }/>
      <p>{ post.content.substring(0, 100) }</p>
      <ReactionButtons post={ post }/>
      <Link to={ `/posts/${ post.id }` } className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      { renderedPosts }
    </section>
  )
}

