import React, { Component, useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonButton } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Reservoir{
    StationNo : any;
    Inflow:any;
    Outflow:any;
}


export default function Details(props: RouteComponentProps<{id: string}>): JSX.Element{
    const {match} = props;
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
            <h1>{match.params.id}</h1>
            <ul>
            {reservoirs.map(water => (
                <li key={match.params.id}>
                    <p>{water.StationNo}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}