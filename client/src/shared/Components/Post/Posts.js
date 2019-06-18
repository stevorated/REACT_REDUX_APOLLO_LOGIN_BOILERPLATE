import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Post } from '../../Components'


function Posts(props) {
  
  const renderQuery = () => {
    if(props.myPostsMode) {
      return props.posts.map(({ id, body, comments, createdAt, createdBy })=>{
        const myName = `${createdBy.fname} ${createdBy.lname}`
        return <Post key={id} myPostsMode={true} body={body} name={myName} comments={comments} createdAt={createdAt} id={id} createdBy={createdBy} />
      })
    } else if (props.feedMode) {
      return props.feed.map(({ id, body, comments, createdAt, createdBy })=>{
        const myName = `${createdBy.fname} ${createdBy.lname}`
        return <Post key={`${id}-feed`} feedMode={true} body={body} name={myName} comments={comments} createdAt={createdAt} id={id} createdBy={createdBy} />
      })
    } else if(props.profileMode) {
      return props.profilePosts.map(({ id, body, comments, createdAt, createdBy })=>{
        const myName = `${createdBy.fname} ${createdBy.lname}`
        return <Post key={`${id}-profile`} profileMode={true} body={body} name={myName} comments={comments} createdAt={createdAt} id={id} createdBy={createdBy} />
      })
    }
  }
    return (
      <div>
        {(props.posts && props.myPostsMode || props.feed || props.profileMode) && renderQuery()}
      </div>
    )
  }

function mapStateToProps({ posts, feed, profilePosts }) {

  return { posts, feed, profilePosts }
}

export default connect(mapStateToProps)(Posts)


