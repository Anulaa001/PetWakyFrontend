import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import './SingleAdScreen.css';
import { singleAdAction } from '../actions/singleAdAction';
export default function SingleAdScreen(props) {
    const singleAd = useSelector ((state) => state.singleAd); //ze store
    const {loading, error, ad} = singleAd;
    const dispatch = useDispatch();
    const adId = props.match.params.id; //wezmie id z propsow z url
    useEffect (()=>{
        dispatch(singleAdAction(adId));
    },[dispatch, adId]);
    return (
        <>
            <div  style={{height: '60vh'}}>
                {loading ? 
                    <Loading></Loading>
                : 
                error ?
                     <Error>{error}</Error>
                : 
                    <div id="data-view">
                        
                        <h2>{ad.title}</h2>
                        <p>{ad.description}</p>
                     
                        <div className="redo"><Link  to={`/adsList`}>Cofnij</Link></div>
                       
                    </div>
                }
            </div>
            
        </>
    );
}