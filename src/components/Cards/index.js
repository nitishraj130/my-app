import Card from './card';
import poster1 from '../../images/Dilwale_Dulhania_Le_Jayenge_poster.jpg'
import poster2 from '../../images/download.jpg'
import poster3 from '../../images/spiderman.jpg'
function cards() {
    return (<>
    <Card head={"heading 1"} desc={"desc 1"} image={poster1}/>
    <Card head={"heading 2"} desc={"desc 3"} image={poster2}/>
    <Card head={"heading 3"} desc={"desc 2"} image={poster3}/>
    </>
    );
}
export default cards;