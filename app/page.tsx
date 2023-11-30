"use client"

import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import Headerxl from '@/components/headerxl';
import Headersm from '@/components/header/headersm';
import Info from '@/components/info/info';
import Infosm from '@/components/info/infosm';
import Categoryxl from '@/components/category/categoryxl';
import Categorysm from '@/components/category/categorysm';
import Accesoriesxl from '@/components/accesories/accesoriesxl';
import Accesoriessm from '@/components/accesories/accesoriessm';
import Orderxl from '@/components/order/orderxl';
import Ordersm from '@/components/order/ordersm';

export default function Home() {
  const isScreenSmall = useMediaQuery('(max-width: 640px)');
  const [isMounted, setIsMounted] = useState(false);
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } 

  return (
    <div>
      {isScreenSmall ? (
        <>
          <Headersm />
          <Infosm />
          <Categorysm />
          <Accesoriessm />
          <Ordersm />
        </>
      ) : (
        <>
          <Headerxl />
          <Info />
          <Categoryxl />
          <Accesoriesxl />
          <Orderxl />
        </>
      )}
    </div>
  );
}
