import * as React from 'react'
import { Post } from '@/models/Post';
import PostItem from '@/components/Posts/PostItem';

interface propsData {
  data: Post[]
}

const ListPosts = (props:propsData) => {

  const { data } = props;

  return (
    <div className='flex flex-col gap-3 mt-2'>
      {data?.map((item,index) => <PostItem data={item} key={index}/>)}
    </div>
  )
}

export default ListPosts