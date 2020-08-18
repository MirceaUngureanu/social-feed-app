import React from 'react'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { Link } from 'react-router-dom'

export const PostExcerpt = ({ post }) =>
{
  return (
    <article className='post-excerpt'>
      <h3>{ post.title }</h3>
      <PostAuthor userId={ post.user }/>
      <TimeAgo timestamp={ post.date }/>
      <p>{ post.content.substring(0, 100) }</p>
      <ReactionButtons post={ post }/>
      <Link to={ `/posts/${ post.id }` } className="button muted-button">
        View Post
      </Link>
    </article>
  )
}