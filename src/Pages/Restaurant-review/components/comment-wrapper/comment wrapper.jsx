import React from 'react';


import CommentCard from '../comment-card/comment-card';
import Buttton from '../../../../components/Button/index';

const CommentWrapper = () => (
    <div className="comment-wrapper">
        <div> 
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </div>
        <Buttton text='Load more' className='button-sm' />
    </div>
)

export default CommentWrapper;
