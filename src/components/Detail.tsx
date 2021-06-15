import React, { Component, useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonButton } from '@ionic/react'
import { RouteComponentProps } from 'react-router';

import axios from 'axios';

interface Reservoir{
    StationNo : any;
    Inflow:any;
    Outflow:any;
    Time:any
}


export default function Details(props: RouteComponentProps<{id: string}>): JSX.Element{
    const {match} = props;
    const {id} = match.params;
    const [reservoirs, setReservoirList] = useState<Reservoir[]>([]);
    


    useEffect(() => {
        axios.get<Reservoir[]>('https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo')
        .then(response => {
            console.log(response.data);
            setReservoirList( response.data );
        })
    })

    
    
    return(
        
        <div>
            <h1>Url params: {id}</h1>
            <div>
                {
                    reservoirs.filter(water => water.StationNo == "10201").map(water => (
                        <li>{water.Time}</li>
                    ))
                }
            </div>
        </div>
    )
}