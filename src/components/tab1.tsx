import { IonContent,IonList, IonItem, IonLabel, IonListHeader, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonCardContent, IonButton, IonPage, IonGrid, IonRow, IonCol} from '@ionic/react';
import { Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Water.css"



class Tab extends Component{

    state = {
        item: []
    }

    componentDidMount() {
        axios.get(`https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station?$orderby=StationNo`)
        .then(res => {
        console.log(res)
        const item = res.data;
        this.setState({ item });
        })
    }

    render(){
        return(
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div>
                                {
                                    this.state.item.map((post:any, key) =>{
                                        return(
                                            
                                                <IonButton expand="full" key={key}>
                                                    <Link to= {`/detail/${post.StationNo}`} target="_blank">
                                                        <h2>{post.StationName}</h2>
                                                    </Link>
                                                </IonButton>
                                            )
                                        })
                                }
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        )
    }

}

export default Tab;