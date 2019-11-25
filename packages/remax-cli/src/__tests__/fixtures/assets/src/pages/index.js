import * as React from 'react';
import { View, Image } from 'remax/alipay';
import cat from '../assets/images/cat.png';
import './index.css';

export default function Index() {
  return (
    <View>
      <Image src={cat} />
    </View>
  );
}
