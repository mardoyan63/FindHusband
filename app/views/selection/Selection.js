import React, { Component } from 'react'
import Swiper from './costom-swiper'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableNativeFeedback,
    BackHandler
} from 'react-native'
import { Header, Icon, Avatar } from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import {
    RkButton,
    RkText,
    RkTextInput,
    RkStyleSheet
} from 'react-native-ui-kitten';

import { connect } from 'react-redux'
import API from '../../networking/api-service'

class SelectionList extends Component {
    static navigationOptions = {
        title: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                require('../../assets/app-images/girl.jpg'),
                require('../../assets/app-images/girl.jpg'),
                require('../../assets/app-images/girl.jpg'),
                require('../../assets/app-images/girl.jpg'),
                require('../../assets/app-images/girl.jpg'),
                require('../../assets/app-images/girl.jpg')
            ],
            loading: false
        }

    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }

    getList() {
        this.setState({
            loading: true
        })
        API.getInfo().then((res) => {
            console.log('I get API');
            this.props.onGetPersonsList({ name: 'Rado' })
            this.setState({
                loading: false
            }, )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor='#fab2ae'
                    outerContainerStyles={styles.header1}
                    innerContainerStyles={{ width: '80%', justifyContent: 'space-around' }}
                    leftComponent={
                        <Icon
                            onPress={() => this.props.navigation.navigate('profile')}
                            size={40}
                            name='person'
                            color='#fff' />
                    }
                    centerComponent={
                        <Icon
                            size={40}
                            name='person'
                            color='#242858' />
                    }
                    rightComponent={
                        { icon: 'person', color: '#fff', size: 40 }
                    }
                />
                <View style={styles.header2}></View>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    cards={this.state.cards}
                    stackSize={1}
                    //outputRotationRange={["-3deg", "0deg", "3deg"]}
                    verticalSwipe={false}
                    cardStyle={styles.defaultCardStyle}
                    cardHorizontalMargin={16}
                    renderCard={(card) => {
                        return (
                            <ElevatedView elevation={2} style={styles.card}>
                                <View style={styles.imageView} >
                                    <Image style={styles.image} source={card} />
                                </View>
                                <TouchableWithoutFeedback style={styles.info} onPress={() => { this.getList() }}>
                                    <View style={styles.info}>
                                        <Text style={styles.infoText1}>Mery, 30</Text>
                                        <Text style={styles.infoText2}>Germany, Berlin</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </ElevatedView>
                        )

                    }}
                    onSwiped={(cardIndex) => {
                        //  console.log(cardIndex) 
                    }}
                    onSwipedAll={() => {
                        //  console.log('onSwipedAll') 
                    }}
                    cardIndex={0}
                    backgroundColor={'transparent'}
                    overlayLabels={{
                        bottom: {
                            element: <Text>BLEAH</Text>, /* Optional */
                            title: 'BLEAH',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }
                        },
                        left: {
                            element: <TouchableOpacity>
                                <View style={styles.button} >
                                    <Icon
                                        size={35}
                                        name='close'
                                        color='#242858' />
                                </View>
                            </TouchableOpacity>, /* Optional */
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30
                                }
                            }
                        },
                        right: {
                            element: <TouchableOpacity>
                                <View style={styles.button} >
                                    <Icon
                                        size={35}
                                        name='close'
                                        color='#242858' />
                                </View>
                            </TouchableOpacity>, /* Optional */
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30
                                }
                            }
                        },
                        top: {
                            element: <Text>SUPER</Text>, /* Optional */
                            title: 'SUPER LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }
                        }
                    }}
                    animateOverlayLabelsOpacity={true}
                >
                </Swiper>
                <View style={styles.bttView}>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => { this.swiper.swipeLeft() }}>
                            <ElevatedView elevation={2} style={styles.button}>
                                <Icon
                                    size={35}
                                    name='close'
                                    color='#242858' />
                            </ElevatedView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.swiper.swipeRight() }}>
                            <ElevatedView elevation={2} style={styles.button}>
                                <Icon
                                    size={35}
                                    name='close'
                                    color='#242858' />
                            </ElevatedView>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default connect(
    state => ({
        store: state.Persons
    }),
    dispatch => ({
        onGetPersonsList: (newPersons) => {
            dispatch({ type: 'GET_PERSONS', newPersons: newPersons })
        },
    })
)(SelectionList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //justifyContent: 'center',
        alignItems: 'center',
    },
    header1: {
        zIndex: 1,
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
    },
    header2: {
        marginTop: -106,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#fab2ae',

        transform: [
            { scaleX: 1.9 },
        ],
    },
    defaultCardStyle: {
        top: 90,
        height: '70%',
    },
    card: {
        margin: 5,
        flex: 1,
        borderRadius: 10,
        //justifyContent: "center",
        backgroundColor: "#fff",
    },
    imageView: {
        height: '80%'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    info: {
        justifyContent: 'center',
        height: '20%',
        width: '100%',
    },
    infoText1: {
        marginLeft: 19,
        color: '#242858',
        fontWeight: '500',
        fontSize: 20,
    },
    infoText2: {
        marginLeft: 19,
        color: '#242858',
        fontSize: 17,
    },
    bttView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        height: '100%',
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#fff',
        //borderWidth: 1,
        borderRadius: 27.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        margin: 5,
    },
});