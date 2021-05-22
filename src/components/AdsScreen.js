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
            <div style={{marginTop:'30px'}}>
                {loading ? 
                    <Loading></Loading>
                : 
                error ?
                     <Error>{error}</Error>
                : 
                <div style={{display: "flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
                    {ads.map((ad)=> (
                            <div key={ad._id}>
                            <div  style={{width:'400px', height:'100px',padding:'10px', margin: '10px', border:"2px solid violet", borderRadius:'10px', boxShadow:'3px 3px 15px 2px rgba(0,0,0,0.72'}}>

                            <Link style={{textDecoration: 'none', color:'rgb(116, 59, 116)', fontWeight:'bolder'}} to={`/adsList/${ad._id}`}>
                            <h2>{ad.title}</h2>
                            </Link>
                            <p>{ad.price} PLN/day</p>
                        </div>
                        </div>
                    ))}
                </div>
            }
            </div>
            
        </>
    );
}