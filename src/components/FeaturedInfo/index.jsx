import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { Featured } from './styles';

const FeaturedInfo = () => {
 return (
  <Featured>

   <div className="featuredItem">
    <span className="featuredTitle">Revenue</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      $2.415
     </span>
     <span className="featuredMoneyRate">
      -11 <MdArrowDownward className="featuredIcon negative" />
     </span>
    </div>
    <span className="featuredSub">Compared to las mounth</span>
   </div>

   <div className="featuredItem">
    <span className="featuredTitle">Revenue</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      $2.415
     </span>
     <span className="featuredMoneyRate">
      -11 <MdArrowDownward className="featuredIcon" />
     </span>
    </div>
    <span className="featuredSub">Compared to las mounth</span>
   </div>


   <div className="featuredItem">
    <span className="featuredTitle">Revenue</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      $2.415
     </span>
     <span className="featuredMoneyRate">
      -11 <MdArrowDownward className="featuredIcon" />
     </span>
    </div>
    <span className="featuredSub">Compared to las mounth</span>
   </div>


  </Featured>
 )
}

export default FeaturedInfo
