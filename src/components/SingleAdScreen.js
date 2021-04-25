import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
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
            <div>
                {loading ? 
                    <Loading></Loading>
                : 
                error ?
                     <Error>{error}</Error>
                : 
                    <div>
                        <Link to={`/adsList`}>Cofnij</Link>
                        <h2>{ad.title}</h2>
                        <p>{ad.description}</p>
                    </div>
                }
            </div>
            
        </>
    );
}