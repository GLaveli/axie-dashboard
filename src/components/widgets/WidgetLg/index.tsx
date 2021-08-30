import { WidgetLgContainer } from "./styles"

export const WidgetLg = () => {

 const Button = ({ type }: any) => {
  return <button className={"widgetLgButton " + type}>{type}</button>
 }

 return (
  <WidgetLgContainer>
   <h3 className="widgetLgTitle">Workers</h3>
   <table className="widgetLgTable">
    <tr className="widgetLgTr">
     <th className="widgetLgTh">Name</th>
     <th className="widgetLgTh">Team</th>
     <th className="widgetLgTh">Slp meta</th>
     <th className="widgetLgTh">Total</th>
     <th className="widgetLgTh">Status</th>
    </tr>
    <tr className="widgetLgTr">
     <td className="widgetLgTdUser">
      <img src="https://img.r7.com/images/jair-bolsonaro-encontra-apoiadores-no-alvorada-21072021141049230?dimensions=771x420" alt="" className="widgetLgImg" />
      <span className="widgetLgName">Barcio</span>
     </td>
     <td className="widgetLgTeam">Genesis</td>
     <td className="widgetLgMeta">100</td>
     <td className="widgetLgAmount">100</td>
     <td className="widgetLgButton"><Button type="ok" /></td>
    </tr>
    <tr className="widgetLgTr">
     <td className="widgetLgTdUser">
      <img src="https://img.r7.com/images/jair-bolsonaro-encontra-apoiadores-no-alvorada-21072021141049230?dimensions=771x420" alt="" className="widgetLgImg" />
      <span className="widgetLgName">Brenno</span>
     </td>
     <td className="widgetLgTeam">Orion</td>
     <td className="widgetLgMeta">103</td>
     <td className="widgetLgAmount">100</td>
     <td className="widgetLgButton"><Button type="progress" /></td>
    </tr>
    <tr className="widgetLgTr">
     <td className="widgetLgTdUser">
      <img src="https://img.r7.com/images/jair-bolsonaro-encontra-apoiadores-no-alvorada-21072021141049230?dimensions=771x420" alt="" className="widgetLgImg" />
      <span className="widgetLgName">Willian</span>
     </td>
     <td className="widgetLgTeam">Weed</td>
     <td className="widgetLgMeta">75</td>
     <td className="widgetLgAmount">75</td>
     <td className="widgetLgButton"><Button type="out" /></td>
    </tr>
    <tr className="widgetLgTr">
     <td className="widgetLgTdUser">
      <img src="https://img.r7.com/images/jair-bolsonaro-encontra-apoiadores-no-alvorada-21072021141049230?dimensions=771x420" alt="" className="widgetLgImg" />
      <span className="widgetLgName">Guilherme</span>
     </td>
     <td className="widgetLgTeam">Andromeda</td>
     <td className="widgetLgMeta">75</td>
     <td className="widgetLgAmount">75</td>
     <td className="widgetLgButton"><Button type="ok" /></td>
    </tr>
    <tr className="widgetLgTr">
     <td className="widgetLgTdUser">
      <img src="https://img.r7.com/images/jair-bolsonaro-encontra-apoiadores-no-alvorada-21072021141049230?dimensions=771x420" alt="" className="widgetLgImg" />
      <span className="widgetLgName">Kodao</span>
     </td>
     <td className="widgetLgTeam">Pirulampu</td>
     <td className="widgetLgMeta">0</td>
     <td className="widgetLgAmount">0</td>
     <td className="widgetLgButton"><Button type="out" /></td>
    </tr>

   </table>
  </WidgetLgContainer>
 )
}
