import { Button, Mask, Text, useDimension, VStack } from '@realsee/vapor';
import { FC } from 'react';

const arrow = <>
  <svg width={`${50 / 16}rem`} height={`${65 / 16}rem`} viewBox="0 0 50 65" version="1.1">
    <defs>
      <linearGradient x1="76.3822263%" y1="2.93808659%" x2="27.7727537%" y2="97.1389846%" id="linearGradient-q5d53ivx7j-1">
        <stop stopColor="#C8C8C8" offset="0%"></stop>
        <stop stopColor="#979797" stopOpacity="0" offset="100%"></stop>
        <stop stopColor="#979797" stopOpacity="0" offset="100%"></stop>
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-q5d53ivx7j-2">
        <stop stopColor="#EEEEEE" offset="0%"></stop>
        <stop stopColor="#D8D8D8" stopOpacity="0.539636145" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-303.000000, -96.000000)">
        <g transform="translate(303.882195, 96.000000)">
          <rect fill="#D8D8D8" opacity="0" x="0.117804522" y="0" width="48" height="64"></rect>
          <path d="M43.4810936,8.49952423 C43.5115873,23.4998414 39.8904909,35.8241163 32.6178045,45.4723488 C25.3451182,55.1205814 14.4725167,61.2548364 0,63.8751137" stroke="url(#linearGradient-q5d53ivx7j-1)" strokeLinecap="square"></path>
          <path d="M43.9262051,0.774733811 L47.5712814,7.25486938 C47.7066633,7.49554832 47.6213032,7.80040587 47.3806242,7.93578777 C47.3057834,7.97788573 47.221362,8 47.1354936,8 L39.8453411,8 C39.5691987,8 39.3453411,7.77614237 39.3453411,7.5 C39.3453411,7.41413157 39.3674554,7.3297102 39.4095533,7.25486938 L43.0546296,0.774733811 C43.1900115,0.534054872 43.494869,0.448694759 43.735548,0.584076662 C43.8153602,0.62897105 43.8813107,0.694921566 43.9262051,0.774733811 Z" fill="url(#linearGradient-q5d53ivx7j-2)"></path>
        </g>
      </g>
    </g>
  </svg>
</>

const WeixinShare2: FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {

  const { match } = useDimension();

  return <Mask
    visible={visible}
    onClose={onClose}
  >
    <VStack>
      <VStack
        align={{ horizontal: 'end' }}
        padding={{ top: `${4 / 16}rem`, right: `${24 / 16}rem` }}
      >
        {arrow}
      </VStack>
      <VStack
        align={{
          horizontal: match('sm') ? 'center' : 'end'
        }}
      >
        <VStack width={`${300 / 16}rem`} align={{ horizontal: 'center' }} gap={`${40 / 16}rem`}>
          <VStack align={{ horizontal: 'center' }} gap={`${24 / 16}rem`}>
            <Text size="lg">点击这里即可与好友分享</Text>
          </VStack>
          <Button appearance='round' size="sm" onClick={onClose}>知道了</Button>
        </VStack>
      </VStack>
    </VStack>
  </Mask>;
};

export { WeixinShare2 };
