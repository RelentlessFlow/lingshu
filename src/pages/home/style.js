import styled from 'styled-components'

// home
export const HomeWrapper = styled.div`
  //overflow: hidden;
  width: 960px;
  height: 300px;
  margin: 0 auto;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  float: left;
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`


// home/Topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  margin-left: 18px;
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`

// home/List
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 450px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
`
