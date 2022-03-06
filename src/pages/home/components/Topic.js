import React from 'react';
import {connect} from "react-redux";
import {TopicItem, TopicWrapper} from '../style'
import {nanoid} from "nanoid";


const Topic = (props) => {
  return (
    <div>
      <TopicWrapper>
        {
          props.list.map((item) => (
            <TopicItem key={nanoid()}>
              <img
                className={'topic-pic'}
                src={item.get('imgUrl')}
                alt={'topicPic1'}/>
              {item.get('title')}
            </TopicItem>
          ))
        }

      </TopicWrapper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','topPicList'])
})
export default connect(mapStateToProps, null)(Topic);