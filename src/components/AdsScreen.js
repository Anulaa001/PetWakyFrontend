import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Error from './Error';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import { listAds } from '../actions/adsAction';
export default function AdsScreen () {
    const dispatch = useDispatch();
    const adsList = useSelector(state=>state.adsList);
    const {loading,error,ads} = adsList;

    useEffect(()=>{
        dispatch(listAds({}));
    }, [dispatch]);
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
                    {ads.map((ad)=> (
                            <div key={ad._id}>
                            <Link to={`/adsList/${ad._id}`}>
                            <h2>{ad.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            }
            </div>
            
        </>
    );
}