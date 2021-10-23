


export default function Occurrences () {

    const name = localStorage.getItem("#be_the_hero:ongName");

    return(
        <div className="Wraper_Occ">
            <h1>{name}</h1>
        </div>
        );
}