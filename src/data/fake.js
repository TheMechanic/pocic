/**
 * This is pure fake data
 */

const connectors = [
  {
    type: 'connector',
    irn: 'irn:connector:1',
    name: 'my first connector',
    status: 0
  },
  {
    type: 'connector',
    irn: 'irn:connector:2',
    name: 'connector paris-dublin',
    status: 1
  },
  {
    type: 'connector',
    irn: 'irn:connector:3',
    name: 'connector dublin-frankfurt',
    status: 0
  }
]

const irgws = [
  {
    type: 'irgw',
    irn: 'irn:irgw:1',
    name: 'my first irgw',
    status: 0
  },
  {
    type: 'irgw',
    irn: 'irn:irgw:2',
    name: 'Dublin - New York city',
    status: 1
  },
  {
    type: 'irgw',
    irn: 'irn:irgw:3',
    name: 'connector paris - Hong-Kong',
    status: 0
  }
]

const networkdevices = [
  {
    type: 'networkdevice',
    irn: 'irn:networkdevice:1',
    name: 'my first networkdevice',
    hostname: 'xe-0-0-16-1.ro1.solocal1.fr-vty-01.admin.intercloud.fr',
    status: 0
  },
  {
    type: 'networkdevice',
    irn: 'irn:networkdevice:2',
    name: 'networkdevices test',
    hostname: 'xa-0-0-16-1.ro1.solocal1.fr-vty-01.admin.intercloud.fr',
    status: 1
  },
  {
    type: 'networkdevice',
    irn: 'irn:networkdevice:3',
    name: 'an other test',
    hostname: 'xa-0-0-16-1.ro1.solocal2.fr-vty-01.admin.intercloud.fr',
    status: 0
  }
]

export const searchapi = (searchstring) => new Promise(resolve => {
  const result = []
  const iterateOn = [connectors, irgws, networkdevices]
  iterateOn.map(data =>
    result.push(...data.filter(o => !!Object.keys(o).find(prop => typeof o[prop] === 'string' && o[prop].includes(searchstring))))
  )
  resolve(result)
})