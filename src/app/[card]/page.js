
import React from 'react'
import { featuredPosts } from '../../Data/data'

import CardDetails from '../../component/CardDetails'
export default function page({params}) {
    if(params.card=='card0'){
        return <CardDetails val={featuredPosts[0]}/>
      } 
     else if(params.card=='card1'){
        return <CardDetails val={featuredPosts[1]}/>
     }
}
