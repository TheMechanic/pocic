import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBatteryThreeQuarters, faChartLine, faServer, faCogs } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import graphimg from '../graph.jpg'
import statusimg from '../status.jpg'

const Connector = () => {
  const [activeTab, setActiveTab] = useState('status')
  const activeIs = (tab) => activeTab === tab
  return <div>
    <h1 className="mb-5 text-2xl">Connector Example</h1>
    <div className="tabs flex">
      <button onClick={() => setActiveTab('status')} className={`p-3 mr-2 border-2 rounded-md ${activeIs('status') ? 'bg-green-700 text-white' : 'bg-white hover:bg-gray-50' }`}><FontAwesomeIcon icon={faBatteryThreeQuarters} /> Status</button>
      <button onClick={() => setActiveTab('kpis')}  className={`p-3 mr-2 border-2 rounded-md ${activeIs('kpis') ? 'bg-green-700 text-white' : 'bg-white hover:bg-gray-50' }`}><FontAwesomeIcon icon={faChartLine} /> KPIs</button>
      <button onClick={() => setActiveTab('ip')}  className={`p-3 mr-2 border-2 rounded-md ${activeIs('ip') ? 'bg-green-700 text-white' : 'bg-white hover:bg-gray-50' }`}><FontAwesomeIcon icon={faServer} /> IP Prefixes</button>
      <button onClick={() => setActiveTab('conf')}  className={`p-3 mr-2 border-2 rounded-md ${activeIs('conf') ? 'bg-green-700 text-white' : 'bg-white hover:bg-gray-50' }`}><FontAwesomeIcon icon={faCogs} /> Configuration</button>
    </div>
    <div className="p-5 border bg-white mt-2">
      { activeIs('status') && <img src={statusimg} /> }
      { activeIs('kpis') && <img src={graphimg} /> }
      {
        activeIs('conf') && <div className="grid grid-cols-2 gap-2">
        <table className="border-collapse border border-green-800">
          <tr>
            <th className="border border-green-600" colSpan={2}>General parameters</th>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Intercloud Resource Name</td>
            <td className="border border-green-600 p-2">irn:connector:skstok62tbks::1ru1hmb</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Name</td>
            <td className="border border-green-600 p-2">TEST AZURE (DO NOT DELETE)</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Description</td>
            <td className="border border-green-600 p-2">This connector is dedicated to check data consistency after version upgrade</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Intercloud region</td>
            <td className="border border-green-600 p-2">Europe</td>
          </tr>
        </table>
        <table className="border-collapse border border-green-800">
          <tr>
            <th className="border border-green-600" colSpan={2}>Edge parameters</th>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Edge code</td>
            <td className="border border-green-600 p-2">GB-SLO-01</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Edge router hostname</td>
            <td className="border border-green-600 p-2">ld5-core1.intercloud.fr</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Bgp description primary</td>
            <td className="border border-green-600 p-2">AZURE-CONNECTOR-SNCF-014-PUBLIC-PRIMARY</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Bgp description secondary</td>
            <td className="border border-green-600 p-2">AZURE-CONNECTOR-SNCF-014-PUBLIC-SECONDARY</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Interface description primary</td>
            <td className="border border-green-600 p-2">LD5:18086772-A:INTERCLOUD-LD4-CX-SEC-01::SNCF-014::AZU-PUBLIC</td>
          </tr>
          <tr>
            <td className="border border-green-600 p-2 font-semibold">Interface description secondary</td>
            <td className="border border-green-600 p-2">LD5:18086772-A:INTERCLOUD-LD4-CX-SEC-01::SNCF-014::AZU-PUBLIC</td>
          </tr>
        </table>
      </div>
      }
    </div>
  </div>
}

export default Connector
