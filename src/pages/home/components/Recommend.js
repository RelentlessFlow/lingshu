import React from 'react';
import { RecommendWrapper, RecommendItem } from '../style.js'
import { connect } from "react-redux";
import {nanoid} from "nanoid";

const Recommend = (props) => {
  return (
    <div>
      <RecommendWrapper>
        {
          props.list.map((item) => {
            return <RecommendItem
              key={nanoid()}
              imgUrl={item.get('imgUrl')}/>
          })
        }
      </RecommendWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps,null)(Recommend);