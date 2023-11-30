import Image from 'next/image'

import Headerxl from '@/components/headerxl';
import Info from '@/components/info/info';
import Categoryxl from '@/components/category/categoryxl';
import Accesoriesxl from '@/components/accesories/accesoriesxl';
import Orderxl from '@/components/order/orderxl';

export default function Home() {
  return (
    <div>
      <Headerxl/>
      <Info />
      <Categoryxl />
      <Accesoriesxl />
      <Orderxl />
      </div>
  )
}
