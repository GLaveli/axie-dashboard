import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { Featured } from './styles';

const FeaturedInfo = () => {
 return (
  <Featured>

   <div className="featuredItem">
    <span className="featuredTitle">Average of SLP per month</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      4.415
     </span>
     <span className="featuredMoneyRate">
      -11% <MdArrowDownward className="featuredIcon negative" />
     </span>
    </div>
    <span className="featuredSub">Compared to last month</span>
   </div>

   <div className="featuredItem">
    <span className="featuredTitle">Average of SLP per day</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      103
     </span>
     <span className="featuredMoneyRate">
      +11% <MdArrowUpward className="featuredIcon" />
     </span>
    </div>
    <span className="featuredSub">Compared to last day</span>
   </div>


   <div className="featuredItem">
    <span className="featuredTitle">Total withdrawal</span>
    <div className="featuredMoneyContainer">
     <span className="featuredMoney">
      R$: 2.487,45
     </span>
     <span className="featuredMoneyRate">
      +3% <MdArrowUpward className="featuredIcon" />
     </span>
    </div>
    <span className="featuredSub">Compared to last month</span>
   </div>


  </Featured>
 )
}

export default FeaturedInfo
