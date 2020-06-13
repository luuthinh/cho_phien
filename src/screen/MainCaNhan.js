import React from 'react';
import { Text, View } from 'react-native';
import { Card, Avatar, IconButton} from 'react-native-paper';
import {connect} from 'react-redux';
import {getInfo} from '../redux/actions';

class MainCaNhan extends React.Component {
    constructor(props) {
        super(props);    
    }
    componentDidUpdate(prevtProps) {
        const { userName } = this.props;
        console.log("next props")
        console.log(this.props)
    }    
    render() {
        console.log("Màn hình cá nhân")
        console.log(this.props)
        return (
            <View style={{ flex: 1}}>
                <Card>
                    <Card.Title 
                    title={this.props.userName}
                    subtitle="Chưa đăng nhâp"
                    left = {() => <Avatar.Image size={36} source={require('./image/download.jpeg')}/>}
                    right={() => <IconButton
                                            icon="archive" 
                                            onPress={() => {return this.props.navigation.navigate('Đăng ký/ Đăng nhập')}}/>}
                    />
                </Card>
            </View>
          );
    }

}

function mapStateToProps(state) {
    return {
      userName: state.auth.userName,
    };
  }

export default connect(mapStateToProps)(MainCaNhan);  


