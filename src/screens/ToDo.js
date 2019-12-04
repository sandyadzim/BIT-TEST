import React, { Component } from 'react';
import {View, FlatList, Image} from 'react-native';
import {Container, Header, Content,Text, Input, Label, Form, Icon, Title, Item, Button} from 'native-base'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import * as actionTodo from '../redux/actions/actionTodo'


class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            category: '',
            id: ''
        }
    }

    componentDidMount = async () => {
        await this.props.handleGetTodo()
    }
    handleAddTodo = async () =>
    {
        const title = this.state.title
        const category = this.state.category
        if (title !== '' && category !== '' ) {
            await this.props.handleAddTodo(title, category)
            await this.props.handleGetTodo()
            await this.setState({title: ''})
            await this.setState({category: ''})
        } else {
            alert('Field Blank')
        }
    }
    editTodo (id, title, category) {
        this.setState({title, category})
    }
    handleDeleteTodo = async () => {
        const id = this.state.id
        await this.props.handleDeleteTodo(id)
        await this.setState({id: ''})
        await this.setState({title: ''})
        await this.setState({category: ''})
        this.props.handleGetTodo()
    }
    render() {
        return (
            <Container style={{flex:1}}>
                <Header style={{backgroundColor:'#d77fa1'}}>
                    <Title style={{alignSelf:'center'}}>To Do List</Title>
                </Header>
                <View style={{flex:1}}>
                <FlatList
                    data={this.props.todoLocal.todo}
                    vertical={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) =>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:3, borderBottomWidth:2}}>
                                    <Text style={{ textAlign: 'center', marginTop:'12%'}}>{item.title}</Text>                                
                                </View>
                                <View style={{flex:1, borderBottomWidth:2}}>
                                    <Button block onPress={() => {this.editTodo(item.id, item.title, item.category)}}>
                                        <Text>Edit</Text>
                                    </Button>
                                    <Button block danger onPress={() => {this.handleDeleteTodo(item.id)}}>
                                        <Text>Delete</Text>
                                    </Button>
                                </View>
                            </View>
                    }
                    keyExtractor={(item, index) => index.toString()
                    }/>

                </View>
                <View style={{flex:1, borderWidth: 3, width:350, alignSelf:'center', borderColor: '#d77fa1', borderRadius:5, marginBottom:10}}>
                    <Form>
                        <Item floatingLabel style={{marginBottom: '5%'}}>
                            <Label>
                                <Text>Create ToDo</Text>  
                            </Label>
                            <Input
                                value={this.state.title}
                                onChangeText={(text) => this.setState({ title: text})} />
                        </Item>
                        <Item floatingLabel style={{marginBottom: '5%'}}>
                            <Label>
                                <Text>Category</Text>
                            </Label>
                            <Input
                                value={this.state.category}
                                onChangeText={(text) => this.setState({category: text})}
                            />
                        </Item>
                        <Button rounded block onPress={() =>{this.handleAddTodo()}}>
                            <Text>ADD</Text>
                        </Button>                        
                    </Form>                        
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoLocal: state.todo
    }
}
const mapDispatchToProps = dispatch => {
    return {   
      handleGetTodo: () => dispatch(actionTodo.handleGetTodo()),
      handleAddTodo: (title, category) => dispatch(actionTodo.handleAddTodo(title, category)),
      handleUpdateTodo: (id, title, category) => dispatch(actionTodo.handleUpdateTodo(id, title, category)),
      handleDeleteTodo: (id) => dispatch(actionTodo.handleDeleteTodo(id))
    }
}

// export default ToDo;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToDo);