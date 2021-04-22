import data from '../data/data';

export default function Ads () {
    return(
<>
{
    data.ads.map(ad=>(
<div key={ad._id} className="card_box">
    <a href={`/ad/${ad._id}`}>
        <h1>{ad.title}</h1>
    </a>
    <div className="card_elem">
        <p>{ad.price}</p>
        <p></p>
        <p></p>
    </div>
</div>
    ))
}

</>
    );
}