import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/react'
import { RouteComponentProps } from 'react-router';


interface DetailsProps extends RouteComponentProps<{
    id: string;
  }> {}


const Details: React.FC<DetailsProps> = ({match, history}) => {
    return(
        <h1>This is id : {match.params.id}</h1>
    )
}

export default Details;