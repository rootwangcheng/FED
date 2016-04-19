//首页分类模块

'use strict';

import React , {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import ListItemWrapper from './ListItemWrapper';


//cat 数据
var MockData = [{
  img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
  text : '手机圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms01.alicdn.com/tps/i1/TB13zsxHpXXXXX8XpXXcy0wIpXX-70-70.png',
  text : '发现好玩',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
  text : '我爱我家',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms03.alicdn.com/tps/i3/TB14NwyHpXXXXaUXXXXcy0wIpXX-70-70.png',
  text : '生活圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://gtms04.alicdn.com/tps/i4/TB1ODktHpXXXXXZXVXXcy0wIpXX-70-70.png',
  text : '试用中心',
  link : 'http://3c.m.tmall.com'                      
}];

// 组件样式
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom : 10,
        paddingLeft : 5,
        paddingRight: 5,
        backgroundColor : '#eeeeee'
    }
});

class About extends React.Component{
    renderItems(data){
        return data.map(function(result){
          return (
            <ListItemWrapper data={result}/>
          )
        })
    }
    render() {
      return (
        <View style={styles.box}>
            {this.renderItems(MockData)}
        </View>
      );
    }

}

module.exports = About